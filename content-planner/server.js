const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure data directory and posts file exist
const DATA_FILE = path.join(__dirname, 'data', 'posts.json');
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Ensure uploads directory exists
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext);
  }
});
const upload = multer({
  storage,
  limits: { files: 10, fileSize: 20 * 1024 * 1024 }, // max 10 files, 20MB each
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  }
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(UPLOADS_DIR));

// Helpers
function readPosts() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}
function writePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
}

// GET all posts (sorted newest first)
app.get('/api/posts', (req, res) => {
  const posts = readPosts();
  res.json(posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

// POST create new post with images
app.post('/api/posts', upload.array('images', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'At least one image is required' });
  }
  const posts = readPosts();
  const post = {
    id: uuidv4(),
    images: req.files.map(f => `/uploads/${f.filename}`),
    comment: req.body.comment || '',
    plannedDate: req.body.plannedDate || '',
    status: req.body.status || 'in-progress',
    createdAt: new Date().toISOString()
  };
  posts.push(post);
  writePosts(posts);
  res.json(post);
});

// PATCH update a post
app.patch('/api/posts/:id', (req, res) => {
  const posts = readPosts();
  const idx = posts.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Post not found' });
  posts[idx] = { ...posts[idx], ...req.body };
  writePosts(posts);
  res.json(posts[idx]);
});

// DELETE a post (and its images)
app.delete('/api/posts/:id', (req, res) => {
  const posts = readPosts();
  const idx = posts.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Post not found' });

  // Delete image files
  posts[idx].images.forEach(imgPath => {
    const filePath = path.join(__dirname, imgPath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  });

  posts.splice(idx, 1);
  writePosts(posts);
  res.json({ success: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✅ Content Planner is running!`);
  console.log(`\n   Open in browser: http://localhost:${PORT}`);
  console.log(`   On your network: http://${getLocalIP()}:${PORT}`);
  console.log(`\n   Press Ctrl+C to stop.\n`);
});

function getLocalIP() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  return 'localhost';
}
