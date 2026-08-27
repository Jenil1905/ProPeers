const LOCAL_STORAGE_KEY = 'propeers_dsa_user_progress_v1';
const API_BASE = import.meta.env.VITE_API_URL || '';

export const fetchProgress = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/progress`);
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn('Backend unavailable, falling back to localStorage:', err.message);
  }

  // Fallback to local storage
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing local storage:', e);
    }
  }

  return { completed: [], notes: {}, bookmarks: [] };
};

export const saveProgress = async (completed, notes, bookmarks) => {
  const payload = { completed, notes, bookmarks };
  
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
