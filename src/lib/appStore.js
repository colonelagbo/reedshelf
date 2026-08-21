const USERS_KEY = 'reedshelf_users_v1';
const SESSION_KEY = 'reedshelf_session_v1';
const BOOKS_KEY = 'reedshelf_books_v1';
const PROGRESS_KEY = 'reedshelf_progress_v1';
const PLANS_KEY = 'reedshelf_plans_v1';
const SETTINGS_KEY = 'reedshelf_settings_v1';

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const uid = (prefix = 'id') => `${prefix}_${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)}_${Date.now()}`;

export const getUsers = () => read(USERS_KEY, []);
export const getSession = () => localStorage.getItem(SESSION_KEY);
export const getCurrentUser = () => getUsers().find(u => u.id === getSession()) || null;

export function registerUser({ name, email, password }) {
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) throw new Error('An account with this email already exists.');
  const user = { id: uid('user'), name, email, password, createdAt: new Date().toISOString() };
  write(USERS_KEY, [...users, user]);
  localStorage.setItem(SESSION_KEY, user.id);
  return user;
}

export function loginUser({ email, password }) {
  const user = getUsers().find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) throw new Error('Incorrect email or password.');
  localStorage.setItem(SESSION_KEY, user.id);
  return user;
}
export function logoutUser() { localStorage.removeItem(SESSION_KEY); }

export const getBooks = () => read(BOOKS_KEY, []);
export const getUserBooks = (userId) => getBooks().filter(b => b.uploadedBy === userId);
export function addBook(book) {
  const books = getBooks();
  const item = { id: uid('book'), ...book, createdAt: new Date().toISOString() };
  write(BOOKS_KEY, [item, ...books]);
  return item;
}
export function deleteBook(id) {
  write(BOOKS_KEY, getBooks().filter(b => b.id !== id));
  const progress = read(PROGRESS_KEY, {}); delete progress[id]; write(PROGRESS_KEY, progress);
}

export const getProgress = (userId, bookId) => read(PROGRESS_KEY, {})[`${userId}:${bookId}`] || { page: 1, updatedAt: null };
export function saveProgress(userId, bookId, page) {
  const all = read(PROGRESS_KEY, {});
  all[`${userId}:${bookId}`] = { page: Math.max(1, Number(page) || 1), updatedAt: new Date().toISOString() };
  write(PROGRESS_KEY, all);
}

export const getPlans = () => read(PLANS_KEY, []);
export const getUserPlans = (userId) => getPlans().filter(p => p.userId === userId);
export function addPlan(plan) { const item = { id: uid('plan'), ...plan, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; write(PLANS_KEY, [item, ...getPlans()]); return item; }
export function updatePlan(id, changes) { const plans = getPlans().map(p => p.id === id ? { ...p, ...changes, updatedAt: new Date().toISOString() } : p); write(PLANS_KEY, plans); }
export function deletePlan(id) { write(PLANS_KEY, getPlans().filter(p => p.id !== id)); }

export const getSettings = (userId) => ({ darkMode: false, ...read(SETTINGS_KEY, {})[userId] });
export function saveSettings(userId, changes) { const all = read(SETTINGS_KEY, {}); all[userId] = { ...getSettings(userId), ...changes }; write(SETTINGS_KEY, all); }

const DB_NAME = 'reedshelf_files_v1';
function openDb() { return new Promise((resolve, reject) => { const req = indexedDB.open(DB_NAME, 1); req.onupgradeneeded = () => req.result.createObjectStore('files'); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
export async function saveBookFile(bookId, file) { const db = await openDb(); return new Promise((resolve, reject) => { const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').put(file, bookId); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }
export async function getBookFile(bookId) { const db = await openDb(); return new Promise((resolve, reject) => { const tx = db.transaction('files', 'readonly'); const req = tx.objectStore('files').get(bookId); req.onsuccess = () => resolve(req.result || null); req.onerror = () => reject(req.error); }); }
export async function deleteBookFile(bookId) { const db = await openDb(); return new Promise((resolve, reject) => { const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').delete(bookId); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }
