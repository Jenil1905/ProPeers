import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'user_data.json');

app.use(cors());
app.use(express.json());

// Ensure data directory & file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const defaultUserData = {
  completed: [],
  notes: {},
  bookmarks: [],
  lastUpdated: new Date().toISOString()
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultUserData, null, 2), 'utf-8');
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get User Progress
app.get('/api/progress', (req, res) => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return res.json(defaultUserData);
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsedData = JSON.parse(data);
    res.json(parsedData);
  } catch (error) {
    console.error('Error reading user progress:', error);
    res.status(500).json({ error: 'Failed to read progress data', details: error.message });
  }
});

// Save / Sync User Progress
app.post('/api/progress', (req, res) => {
  try {
    const { completed, notes, bookmarks } = req.body;
    
    const updatedData = {
      completed: Array.isArray(completed) ? completed : [],
      notes: typeof notes === 'object' && notes !== null ? notes : {},
      bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
      lastUpdated: new Date().toISOString()
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2), 'utf-8');
    res.json({ success: true, message: 'Progress saved successfully', data: updatedData });
  } catch (error) {
    console.error('Error saving user progress:', error);
    res.status(500).json({ error: 'Failed to save progress data', details: error.message });
  }
});

// Serve static frontend assets and handle SPA routing fallback in production
const frontendDistPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`ProPeers Backend API running on http://localhost:${PORT}`);
});
