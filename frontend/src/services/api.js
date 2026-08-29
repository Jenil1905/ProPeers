const LOCAL_STORAGE_KEY = 'propeers_dsa_user_progress_v1';
const API_BASE = import.meta.env.VITE_API_URL || '';

// Helper to merge local and server progress without losing user updates
const mergeProgress = (local, server) => {
  const localCompleted = Array.isArray(local?.completed) ? local.completed : [];
  const serverCompleted = Array.isArray(server?.completed) ? server.completed : [];
  const mergedCompleted = Array.from(new Set([...localCompleted, ...serverCompleted]));

  const localBookmarks = Array.isArray(local?.bookmarks) ? local.bookmarks : [];
  const serverBookmarks = Array.isArray(server?.bookmarks) ? server.bookmarks : [];
  const mergedBookmarks = Array.from(new Set([...localBookmarks, ...serverBookmarks]));

  const localNotes = typeof local?.notes === 'object' && local.notes !== null ? local.notes : {};
  const serverNotes = typeof server?.notes === 'object' && server.notes !== null ? server.notes : {};
  const mergedNotes = { ...serverNotes, ...localNotes };

  return {
    completed: mergedCompleted,
    notes: mergedNotes,
    bookmarks: mergedBookmarks,
    lastUpdated: new Date().toISOString()
  };
};

// Check if local storage has progress that the server is missing
const hasNewerLocalData = (local, server) => {
  if (!local) return false;
  if (!server) return true;

  const localComp = local.completed || [];
  const serverComp = server.completed || [];
  const localMark = local.bookmarks || [];
  const serverMark = server.bookmarks || [];
  const localNotesKeys = Object.keys(local.notes || {});
  const serverNotesKeys = Object.keys(server.notes || {});

  const missingCompleted = localComp.some(id => !serverComp.includes(id));
  const missingBookmarks = localMark.some(id => !serverMark.includes(id));
  const missingNotes = localNotesKeys.some(key => !serverNotesKeys.includes(key) || local.notes[key] !== server.notes[key]);

  return missingCompleted || missingBookmarks || missingNotes;
};

export const fetchProgress = async () => {
  let localData = null;
  const savedLocal = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedLocal) {
    try {
      localData = JSON.parse(savedLocal);
    } catch (e) {
      console.error('Error parsing local storage:', e);
    }
  }

  try {
    const response = await fetch(`${API_BASE}/api/progress`);
    if (response.ok) {
      const serverData = await response.json();
      
      const merged = mergeProgress(localData, serverData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));

      // If local storage contains updates that the server lost (e.g. server slept/reset), push back to server
      if (hasNewerLocalData(localData, serverData)) {
        saveProgress(merged.completed, merged.notes, merged.bookmarks);
      }

      return merged;
    }
  } catch (err) {
    console.warn('Backend unavailable, falling back to localStorage:', err.message);
  }

  // Fallback to local storage
  if (localData) return localData;

  return { completed: [], notes: {}, bookmarks: [] };
};

export const saveProgress = async (completed, notes, bookmarks) => {
  const payload = { completed, notes, bookmarks, lastUpdated: new Date().toISOString() };
  
  // Always update localStorage immediately
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));

  try {
    const response = await fetch(`${API_BASE}/api/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Could not save to backend server, saved locally:', err.message);
  }

  return { success: true, localOnly: true };
};

