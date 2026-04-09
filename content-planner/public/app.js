// ── State ──────────────────────────────────────────────────────────────
let posts = [];
let currentFilter = 'all';
let selectedFiles = [];
let detailPostId = null;
let galleryIndex = 0;

// ── DOM refs ────────────────────────────────────────────────────────────
const feed                = document.getElementById('feed');
const emptyState          = document.getElementById('emptyState');

// Upload screen
const uploadOverlay       = document.getElementById('uploadOverlay');
const openUploadBtn       = document.getElementById('openUpload');
const closeUploadBtn      = document.getElementById('closeUpload');
const dropZone            = document.getElementById('dropZone');
const fileInput           = document.getElementById('fileInput');
const previewStrip        = document.getElementById('previewStrip');
const uploadDate          = document.getElementById('uploadDate');
const uploadComment       = document.getElementById('uploadComment');
const uploadStatusInput   = document.getElementById('uploadStatus');
const uploadStatusToggle  = document.getElementById('uploadStatusToggle');
const savePostBtn         = document.getElementById('savePost');

// Detail screen
const detailOverlay       = document.getElementById('detailOverlay');
const closeDetailBtn      = document.getElementById('closeDetail');
const deletePostBtn       = document.getElementById('deletePost');
const galleryMain         = document.getElementById('galleryMain');
const galleryPrev         = document.getElementById('galleryPrev');
const galleryNext         = document.getElementById('galleryNext');
const galleryCounter      = document.getElementById('galleryCounter');
const galleryThumbs       = document.getElementById('galleryThumbs');
const detailDate          = document.getElementById('detailDate');
const detailComment       = document.getElementById('detailComment');
const detailStatusInput   = document.getElementById('detailStatus');
const detailStatusToggle  = document.getElementById('detailStatusToggle');
const saveDetailBtn       = document.getElementById('saveDetail');
const screenTitle         = detailOverlay.querySelector('.screen-title');

// ── Init ────────────────────────────────────────────────────────────────
loadPosts();

// ── Filter buttons ──────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderFeed();
  });
});

// ── Status toggle helper ─────────────────────────────────────────────────
function bindStatusToggle(container, hiddenInput) {
  container.querySelectorAll('.status-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      container.querySelectorAll('.status-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      hiddenInput.value = pill.dataset.value;
    });
  });
}
function setStatusToggle(container, hiddenInput, value) {
  hiddenInput.value = value;
  container.querySelectorAll('.status-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.value === value);
  });
}

bindStatusToggle(uploadStatusToggle, uploadStatusInput);
bindStatusToggle(detailStatusToggle, detailStatusInput);

// ── Upload Screen ─────────────────────────────────────────────────────────
openUploadBtn.addEventListener('click', openUploadScreen);
closeUploadBtn.addEventListener('click', closeUploadScreen);
uploadOverlay.addEventListener('click', e => { if (e.target === uploadOverlay) closeUploadScreen(); });

function openUploadScreen() {
  selectedFiles = [];
  previewStrip.innerHTML = '';
  uploadDate.value = '';
  uploadComment.value = '';
  setStatusToggle(uploadStatusToggle, uploadStatusInput, 'in-progress');
  fileInput.value = '';
  uploadOverlay.classList.add('open');
}
function closeUploadScreen() {
  uploadOverlay.classList.remove('open');
}

// File picking
fileInput.addEventListener('change', () => addFiles(Array.from(fileInput.files)));

// Drag & drop
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  addFiles(Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')));
});

function addFiles(newFiles) {
  const allowed = newFiles.slice(0, Math.max(0, 10 - selectedFiles.length));
  if (selectedFiles.length + newFiles.length > 10) alert(`Max 10 images. Added first ${allowed.length}.`);
  selectedFiles = [...selectedFiles, ...allowed];
  renderPreviewStrip();
}

function renderPreviewStrip() {
  previewStrip.innerHTML = '';
  selectedFiles.forEach((file, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'preview-thumb-wrap';
    const img = document.createElement('img');
    img.className = 'preview-thumb';
    img.src = URL.createObjectURL(file);
    const btn = document.createElement('button');
    btn.className = 'remove-thumb';
    btn.textContent = '✕';
    btn.addEventListener('click', () => { selectedFiles.splice(i, 1); renderPreviewStrip(); });
    wrap.append(img, btn);
    previewStrip.append(wrap);
  });
}

// Save new post
savePostBtn.addEventListener('click', async () => {
  if (selectedFiles.length === 0) { alert('Please add at least one image.'); return; }
  savePostBtn.disabled = true;
  savePostBtn.textContent = 'Saving…';
  const form = new FormData();
  selectedFiles.forEach(f => form.append('images', f));
  form.append('plannedDate', uploadDate.value);
  form.append('comment', uploadComment.value);
  form.append('status', uploadStatusInput.value);
  try {
    const res = await fetch('/api/posts', { method: 'POST', body: form });
    if (!res.ok) throw new Error(await res.text());
    await loadPosts();
    closeUploadScreen();
  } catch (err) {
    alert('Error saving: ' + err.message);
  } finally {
    savePostBtn.disabled = false;
    savePostBtn.textContent = 'Post';
  }
});

// ── Detail Screen ─────────────────────────────────────────────────────────
closeDetailBtn.addEventListener('click', () => detailOverlay.classList.remove('open'));
detailOverlay.addEventListener('click', e => { if (e.target === detailOverlay) detailOverlay.classList.remove('open'); });

function openDetail(post) {
  detailPostId = post.id;
  galleryIndex = 0;
  renderGallery(post.images);
  setStatusToggle(detailStatusToggle, detailStatusInput, post.status || 'in-progress');
  detailDate.value = post.plannedDate || '';
  detailComment.value = post.comment || '';
  screenTitle.textContent = post.plannedDate ? formatDate(post.plannedDate) : '';
  detailOverlay.classList.add('open');
}

function renderGallery(images) {
  galleryMain.src = images[galleryIndex];
  galleryCounter.textContent = images.length > 1 ? `${galleryIndex + 1} / ${images.length}` : '';
  if (images.length > 1) {
    galleryPrev.removeAttribute('hidden');
    galleryNext.removeAttribute('hidden');
  } else {
    galleryPrev.setAttribute('hidden', '');
    galleryNext.setAttribute('hidden', '');
  }
  galleryThumbs.innerHTML = '';
  if (images.length > 1) {
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = i === galleryIndex ? 'active' : '';
      img.addEventListener('click', () => { galleryIndex = i; renderGallery(images); });
      galleryThumbs.append(img);
    });
  }
}

galleryPrev.addEventListener('click', () => {
  const post = posts.find(p => p.id === detailPostId);
  if (!post) return;
  galleryIndex = (galleryIndex - 1 + post.images.length) % post.images.length;
  renderGallery(post.images);
});
galleryNext.addEventListener('click', () => {
  const post = posts.find(p => p.id === detailPostId);
  if (!post) return;
  galleryIndex = (galleryIndex + 1) % post.images.length;
  renderGallery(post.images);
});

// Save detail
saveDetailBtn.addEventListener('click', async () => {
  saveDetailBtn.disabled = true;
  saveDetailBtn.textContent = 'Saving…';
  try {
    const res = await fetch(`/api/posts/${detailPostId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plannedDate: detailDate.value,
        comment: detailComment.value,
        status: detailStatusInput.value
      })
    });
    if (!res.ok) throw new Error(await res.text());
    await loadPosts();
    detailOverlay.classList.remove('open');
  } catch (err) {
    alert('Error saving: ' + err.message);
  } finally {
    saveDetailBtn.disabled = false;
    saveDetailBtn.textContent = 'Save';
  }
});

// Delete post
deletePostBtn.addEventListener('click', async () => {
  if (!confirm('Delete this post? This cannot be undone.')) return;
  try {
    const res = await fetch(`/api/posts/${detailPostId}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(await res.text());
    await loadPosts();
    detailOverlay.classList.remove('open');
  } catch (err) {
    alert('Error deleting: ' + err.message);
  }
});

// ── Data ─────────────────────────────────────────────────────────────────
async function loadPosts() {
  try {
    const res = await fetch('/api/posts');
    posts = await res.json();
    renderFeed();
  } catch {
    feed.innerHTML = '<p style="color:#ff453a;padding:20px;text-align:center">Could not connect to server.</p>';
  }
}

// ── Render feed ───────────────────────────────────────────────────────────
function renderFeed() {
  const filtered = currentFilter === 'all' ? posts : posts.filter(p => p.status === currentFilter);
  feed.innerHTML = '';
  if (filtered.length === 0) { emptyState.style.display = 'block'; return; }
  emptyState.style.display = 'none';

  filtered.forEach(post => {
    const tile = document.createElement('div');
    tile.className = 'tile';

    const img = document.createElement('img');
    img.src = post.images[0];
    img.alt = '';
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'tile-overlay';
    if (post.plannedDate) {
      const d = document.createElement('div');
      d.className = 'tile-date-label';
      d.textContent = formatDate(post.plannedDate);
      overlay.append(d);
    }
    if (post.comment) {
      const c = document.createElement('div');
      c.className = 'tile-comment-preview';
      c.textContent = post.comment;
      overlay.append(c);
    }

    const dot = document.createElement('div');
    dot.className = `tile-status-dot ${post.status}`;

    tile.append(img, overlay, dot);

    if (post.images.length > 1) {
      const iconWrap = document.createElement('div');
      iconWrap.className = 'tile-multi-icon';
      iconWrap.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="5" y="1" width="11" height="11" rx="2" fill="none" stroke="white" stroke-width="1.4"/>
        <rect x="2" y="5" width="11" height="11" rx="2" fill="rgba(0,0,0,0.4)" stroke="white" stroke-width="1.4"/>
      </svg>`;
      tile.append(iconWrap);
    }

    tile.addEventListener('click', () => openDetail(post));
    feed.append(tile);
  });
}

function formatDate(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-');
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
