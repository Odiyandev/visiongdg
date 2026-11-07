const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('final_questions.json', 'utf8'));

console.log(`Embedding ${questions.length} questions into the exam application...`);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0d1527">
<meta name="description" content="Infinite Ground Handling & Basics of Aviation Practice Exam with 230+ randomized questions, instant explanations, category filters, and exam simulation mode.">
<title>AeroQuest | Ground Handling & Aviation Infinity Exam</title>
<style>
:root {
  --bg: #090e17;
  --bg-card: #111a2e;
  --bg-card-subtle: #17233d;
  --ink: #f0f4f8;
  --ink-muted: #94a3b8;
  --ink-dim: #64748b;
  --accent: #10b981;
  --accent-light: rgba(16, 185, 129, 0.15);
  --accent-border: #059669;
  --amber: #f59e0b;
  --amber-light: rgba(245, 158, 11, 0.15);
  --blue: #3b82f6;
  --blue-light: rgba(59, 130, 246, 0.15);
  --red: #ef4444;
  --red-light: rgba(239, 68, 68, 0.15);
  --line: #1e293b;
  --line-strong: #334155;
  --shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg);
  background-image: 
    radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.08) 0px, transparent 50%);
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px 40px;
  padding: calc(18px + env(safe-area-inset-top)) calc(14px + env(safe-area-inset-right)) calc(40px + env(safe-area-inset-bottom)) calc(14px + env(safe-area-inset-left));
}

.wrap {
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 4px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981, #0284c7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
}

.brand-text h1 {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.4px;
  color: #fff;
  line-height: 1.2;
}

.brand-text p {
  font-size: 12px;
  color: var(--ink-muted);
  font-weight: 500;
}

.header-tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool-btn {
  background: var(--bg-card);
  border: 1px solid var(--line);
  color: var(--ink-muted);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s;
}

.tool-btn:hover {
  background: var(--bg-card-subtle);
  color: #fff;
  border-color: var(--line-strong);
}

.tool-btn.active {
  background: var(--accent-light);
  color: var(--accent);
  border-color: var(--accent-border);
}

/* Control Filter Bar */
.filter-bar {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.source-pills {
  display: flex;
  background: var(--bg);
  padding: 3px;
  border-radius: 10px;
  border: 1px solid var(--line);
  gap: 2px;
  overflow-x: auto;
}

.pill-btn {
  background: transparent;
  border: none;
  color: var(--ink-muted);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
}

.pill-btn.active {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);
}

.select-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 240px;
}

select {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--line);
  color: var(--ink);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

select:focus {
  border-color: var(--accent);
}

.mode-toggle {
  display: flex;
  align-items: center;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
}

.mode-btn {
  background: transparent;
  border: none;
  color: var(--ink-muted);
  padding: 6px 11px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.mode-btn.active {
  background: var(--bg-card-subtle);
  color: #fff;
  border: 1px solid var(--line-strong);
}

/* Exam Card */
.card {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: clamp(20px, 4vw, 36px);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.badges {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 5px 10px;
  border-radius: 8px;
}

.badge-cat {
  background: var(--blue-light);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.badge-source {
  background: var(--accent-light);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.card-top-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.q-counter {
  font-size: 13px;
  font-weight: 750;
  color: var(--ink-muted);
}

.btn-star {
  background: transparent;
  border: none;
  color: var(--ink-dim);
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.15s, color 0.15s;
}

.btn-star:hover {
  transform: scale(1.15);
  color: var(--amber);
}

.btn-star.starred {
  color: var(--amber);
}

/* Progress bar */
.progress-wrap {
  height: 6px;
  background: var(--bg);
  border-radius: 99px;
  overflow: hidden;
  margin: 10px 0 24px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #10b981, #06b6d4);
  border-radius: 99px;
  transition: width 0.3s ease;
}

/* Question text */
.q-title {
  font-size: clamp(19px, 3.2vw, 24px);
  line-height: 1.45;
  font-weight: 750;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.3px;
}

/* Options */
.options-grid {
  display: grid;
  gap: 12px;
}

.option-btn {
  width: 100%;
  min-height: 56px;
  background: var(--bg-card-subtle);
  border: 1.5px solid var(--line);
  border-radius: 16px;
  padding: 14px 18px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--ink);
  font-size: 15.5px;
  line-height: 1.45;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.option-btn:hover:not(:disabled) {
  border-color: #3b82f6;
  background: #1e2c4d;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.option-btn:active:not(:disabled) {
  transform: translateY(0);
}

.option-letter {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--bg);
  color: var(--ink-muted);
  font-size: 13px;
  font-weight: 800;
  flex: none;
  border: 1px solid var(--line);
}

.option-text {
  flex: 1;
}

.option-key {
  font-size: 11px;
  color: var(--ink-dim);
  border: 1px solid var(--line);
  padding: 2px 6px;
  border-radius: 6px;
  flex: none;
}

/* Correct / Wrong States */
.option-btn.correct {
  border-color: var(--accent);
  background: var(--accent-light);
  color: #e6fffa;
}

.option-btn.correct .option-letter {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.option-btn.wrong {
  border-color: var(--red);
  background: var(--red-light);
  color: #ffe4e4;
}

.option-btn.wrong .option-letter {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
}

.option-btn:disabled {
  cursor: default;
  opacity: 0.85;
}

/* Explanation Box */
.feedback-box {
  display: none;
  margin-top: 22px;
  border-radius: 16px;
  padding: 18px 20px;
  font-size: 14.5px;
  line-height: 1.55;
  animation: slideDown 0.2s ease-out forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.feedback-box.show { display: block; }

.feedback-box.good {
  background: var(--accent-light);
  border: 1px solid var(--accent-border);
  color: #d1fae5;
}

.feedback-box.bad {
  background: var(--red-light);
  border: 1px solid var(--red);
  color: #fee2e2;
}

.feedback-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 8px;
}

.feedback-box.good .feedback-title { color: #34d399; }
.feedback-box.bad .feedback-title { color: #f87171; }

.feedback-explain {
  color: var(--ink);
  font-size: 14px;
}

/* Card Actions */
.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 26px;
}

.action-btn {
  min-height: 48px;
  border-radius: 14px;
  padding: 12px 22px;
  font-size: 14.5px;
  font-weight: 750;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.15s;
}

.btn-secondary {
  background: var(--bg-card-subtle);
  border: 1px solid var(--line);
  color: var(--ink-muted);
}

.btn-secondary:hover {
  background: var(--bg);
  color: #fff;
  border-color: var(--line-strong);
}

.btn-primary {
  background: var(--accent);
  border: none;
  color: #fff;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
}

.btn-primary:hover:not(:disabled) {
  background: #059669;
  transform: translateY(-1px);
}

.btn-primary:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  box-shadow: none;
}

/* Stats Footer Strip */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.stat-item {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 16px;
  text-align: center;
}

.stat-val {
  display: block;
  font-size: clamp(20px, 3.5vw, 26px);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 4px;
}

.stat-lbl {
  font-size: 11px;
  color: var(--ink-muted);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* Modal Drawer (Stats & Mastery) */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-card {
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  background: var(--bg-card);
  border: 1px solid var(--line-strong);
  border-radius: 24px;
  padding: clamp(20px, 3vw, 32px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: zoomIn 0.2s ease-out;
}

@keyframes zoomIn {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex: none;
}

.modal-head h2 {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}

.btn-close {
  background: var(--bg-card-subtle);
  border: 1px solid var(--line);
  color: var(--ink-muted);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 18px;
  cursor: pointer;
}

.btn-close:hover {
  color: #fff;
  border-color: var(--line-strong);
}

.modal-body {
  overflow-y: auto;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mastery-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mastery-meta {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 700;
}

.mastery-bar-bg {
  height: 8px;
  background: var(--bg);
  border-radius: 99px;
  overflow: hidden;
}

.mastery-bar-fill {
  height: 100%;
  border-radius: 99px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.bookmarked-item {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bookmarked-item h4 {
  font-size: 14px;
  color: #fff;
}

.bookmarked-item p {
  font-size: 12.5px;
  color: var(--accent);
}

/* Shortcuts footer */
.shortcuts-footer {
  text-align: center;
  font-size: 12px;
  color: var(--ink-dim);
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.kbd-badge {
  background: var(--bg-card);
  border: 1px solid var(--line);
  padding: 2px 6px;
  border-radius: 6px;
  font-family: monospace;
  color: var(--ink-muted);
}

/* Responsive */
@media (max-width: 600px) {
  body { padding: 12px 10px 24px; }
  .card { padding: 18px 16px; border-radius: 18px; }
  .stats-strip { grid-template-columns: repeat(2, 1fr); }
  .filter-row { flex-direction: column; align-items: stretch; }
  .source-pills { overflow-x: auto; }
  .select-wrap { min-width: 100%; }
  .option-btn { min-height: 52px; padding: 12px 14px; font-size: 14.5px; }
  .card-actions { flex-direction: column-reverse; }
  .card-actions .action-btn { width: 100%; justify-content: center; }
  .option-key { display: none; }
}
</style>
</head>
<body>
<div class="wrap">

  <!-- Header -->
  <header class="header">
    <div class="brand">
      <div class="brand-icon">✈</div>
      <div class="brand-text">
        <h1>AeroQuest Exam</h1>
        <p>Ground Handling & Basics of Aviation</p>
      </div>
    </div>
    <div class="header-tools">
      <button class="tool-btn" id="soundBtn" title="Toggle audio chime">
        <span id="soundIcon">🔊</span> <span id="soundTxt">Sound ON</span>
      </button>
      <button class="tool-btn" id="statsBtn" title="View category breakdown">
        📊 Mastery
      </button>
    </div>
  </header>

  <!-- Filter Controls -->
  <div class="filter-bar">
    <div class="filter-row">
      <div class="source-pills">
        <button class="pill-btn active" data-source="ALL">🌐 All Sources (233)</button>
        <button class="pill-btn" data-source="Ground Handling PPT">📋 PPT Only (176)</button>
        <button class="pill-btn" data-source="Basics of Aviation">🛩️ Basics Only (57)</button>
      </div>

      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="infinite">♾️ Infinite Mode</button>
        <button class="mode-btn" data-mode="exam">🎯 50-Q Exam</button>
        <button class="mode-btn" data-mode="bookmarks">⭐ Bookmarks (<span id="bookmarkCount">0</span>)</button>
      </div>
    </div>

    <div class="filter-row">
      <div class="select-wrap">
        <select id="catSelect">
          <option value="ALL">All Categories (19 Topics)</option>
        </select>
      </div>
      <button class="tool-btn" id="resetDeckBtn" title="Shuffle remaining deck">
        🔄 Shuffle / Reset Deck
      </button>
    </div>
  </div>

  <!-- Main Question Card -->
  <main class="card">
    <div class="card-top">
      <div class="badges">
        <span class="badge badge-cat" id="catBadge">AVIATION BASICS</span>
        <span class="badge badge-source" id="sourceBadge">GROUND HANDLING PPT</span>
      </div>
      <div class="card-top-right">
        <span class="q-counter" id="qCounter">Question 1</span>
        <button class="btn-star" id="starBtn" title="Bookmark this question">☆</button>
      </div>
    </div>

    <div class="progress-wrap">
      <div class="progress-bar" id="progressBar"></div>
    </div>

    <h2 class="q-title" id="qTitle">Loading question...</h2>

    <div class="options-grid" id="optionsGrid"></div>

    <div class="feedback-box" id="feedbackBox">
      <div class="feedback-title" id="fbTitle">✓ Correct!</div>
      <div class="feedback-explain" id="fbExplain"></div>
    </div>

    <div class="card-actions">
      <button class="action-btn btn-secondary" id="skipBtn">
        ⏭ Skip Question <span class="kbd-badge">[S]</span>
      </button>
      <button class="action-btn btn-primary" id="nextBtn" disabled>
        Next Question → <span class="kbd-badge">[Space]</span>
      </button>
    </div>
  </main>

  <!-- Live Stats Strip -->
  <div class="stats-strip">
    <div class="stat-item">
      <span class="stat-val" id="statScore">0</span>
      <span class="stat-lbl">Correct Answers</span>
    </div>
    <div class="stat-item">
      <span class="stat-val" id="statAccuracy">0%</span>
      <span class="stat-lbl">Accuracy Rate</span>
    </div>
    <div class="stat-item">
      <span class="stat-val" id="statStreak">🔥 0</span>
      <span class="stat-lbl">Current Streak</span>
    </div>
    <div class="stat-item">
      <span class="stat-val" id="statBest">🏆 0</span>
      <span class="stat-lbl">Best Streak</span>
    </div>
  </div>

  <div class="shortcuts-footer">
    <span>Keys: <span class="kbd-badge">1</span>-<span class="kbd-badge">4</span> or <span class="kbd-badge">A</span>-<span class="kbd-badge">D</span> Choose Answer</span>
    <span><span class="kbd-badge">Space</span> / <span class="kbd-badge">Enter</span> Next</span>
    <span><span class="kbd-badge">S</span> Skip</span>
    <span><span class="kbd-badge">B</span> Star</span>
  </div>

</div>

<!-- Mastery Modal -->
<div class="modal-overlay" id="masteryModal">
  <div class="modal-card">
    <div class="modal-head">
      <h2>📊 Category Mastery & Bookmarks</h2>
      <button class="btn-close" id="closeMasteryBtn">✕</button>
    </div>
    <div class="modal-body">
      <div id="masteryList"></div>
      <hr style="border:0; border-top: 1px solid var(--line); margin: 10px 0;">
      <h3 style="font-size: 16px; color: #fff;">Saved Bookmarks</h3>
      <div id="bookmarkList" style="display:flex; flex-direction:column; gap:8px;"></div>
    </div>
  </div>
</div>

<script>
// RAW QUESTIONS DATASET (233 Verified Questions)
const BANK = ${JSON.stringify(questions)};

// State Management
let deck = [];
let deckIndex = 0;
let currentQuestion = null;
let isAnswerLocked = false;
let sessionStats = {
  correct: 0,
  attempted: 0,
  streak: 0,
  bestStreak: parseInt(localStorage.getItem('aeroquest_best_streak') || '0', 10),
  categoryMastery: {} // { catName: { correct: 0, attempted: 0 } }
};
let soundEnabled = localStorage.getItem('aeroquest_sound') !== 'false';
let bookmarks = new Set(JSON.parse(localStorage.getItem('aeroquest_bookmarks') || '[]'));
let activeSource = 'ALL';
let activeCategory = 'ALL';
let activeMode = 'infinite'; // 'infinite', 'exam', 'bookmarks'
let examTargetCount = 50;

// Audio Synthesizer (Web Audio API)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    if (type === 'correct') {
      // Pleasant high major triad chord
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } else if (type === 'wrong') {
      // Low dual buzz
      [220, 185].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    }
  } catch (err) {
    console.warn('Audio play failed:', err);
  }
}

// Helpers
const $ = id => document.getElementById(id);
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Populate Categories Dropdown
function initCategories() {
  const cats = {};
  BANK.forEach(q => { cats[q.c] = (cats[q.c] || 0) + 1; });
  const select = $('catSelect');
  select.innerHTML = '<option value="ALL">🌐 All Categories (19 Topics - ' + BANK.length + ' Questions)</option>';
  Object.keys(cats).sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = \`\${cat} (\${cats[cat]})\`;
    select.appendChild(opt);
  });
}

// Deck Building & Filtering
function buildDeck() {
  let pool = BANK;
  
  if (activeMode === 'bookmarks') {
    pool = pool.filter(q => bookmarks.has(q.id));
    if (pool.length === 0) {
      alert('You have no bookmarked questions! Switching back to Infinite Mode.');
      setMode('infinite');
      return;
    }
  } else {
    if (activeSource !== 'ALL') {
      pool = pool.filter(q => q.source === activeSource);
    }
    if (activeCategory !== 'ALL') {
      pool = pool.filter(q => q.c === activeCategory);
    }
  }

  deck = shuffle(pool);
  deckIndex = 0;
  if (activeMode === 'exam') {
    deck = deck.slice(0, Math.min(examTargetCount, deck.length));
  }
}

// Render Next Question
function nextQuestion() {
  if (deck.length === 0 || deckIndex >= deck.length) {
    if (activeMode === 'exam') {
      showExamCompletion();
      return;
    }
    buildDeck();
  }

  currentQuestion = deck[deckIndex++];
  isAnswerLocked = false;

  // Badges & Counter
  $('catBadge').textContent = currentQuestion.c.toUpperCase();
  $('sourceBadge').textContent = currentQuestion.source.toUpperCase();
  
  if (activeMode === 'exam') {
    $('qCounter').textContent = \`Exam Question \${deckIndex} of \${deck.length}\`;
    $('progressBar').style.width = \`\${Math.round((deckIndex / deck.length) * 100)}%\`;
  } else {
    $('qCounter').textContent = \`Question \${sessionStats.attempted + 1} (Card \${deckIndex}/\${deck.length})\`;
    $('progressBar').style.width = \`\${Math.round((deckIndex / deck.length) * 100)}%\`;
  }

  // Star status
  $('starBtn').textContent = bookmarks.has(currentQuestion.id) ? '★' : '☆';
  $('starBtn').className = bookmarks.has(currentQuestion.id) ? 'btn-star starred' : 'btn-star';

  // Question Title
  $('qTitle').textContent = currentQuestion.q;

  // Reset feedback & Next button
  $('feedbackBox').className = 'feedback-box';
  $('feedbackBox').innerHTML = '';
  $('nextBtn').disabled = true;
  $('nextBtn').innerHTML = 'Next Question → <span class="kbd-badge">[Space]</span>';

  // Build shuffled options
  const correctOptionText = currentQuestion.o[currentQuestion.a];
  const optionObjects = currentQuestion.o.map((opt, i) => ({
    text: opt,
    isCorrect: i === currentQuestion.a
  }));
  const shuffledOptions = shuffle(optionObjects);

  const grid = $('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  shuffledOptions.forEach((optObj, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = \`
      <span class="option-letter">\${letters[idx]}</span>
      <span class="option-text">\${optObj.text}</span>
      <span class="option-key">[\${idx + 1}]</span>
    \`;
    btn.addEventListener('click', () => handleAnswer(btn, optObj, correctOptionText));
    grid.appendChild(btn);
  });
}

// Answer Selection
function handleAnswer(selectedBtn, optObj, correctText) {
  if (isAnswerLocked) return;
  isAnswerLocked = true;
  sessionStats.attempted++;

  // Category tracking
  const cat = currentQuestion.c;
  if (!sessionStats.categoryMastery[cat]) {
    sessionStats.categoryMastery[cat] = { correct: 0, attempted: 0 };
  }
  sessionStats.categoryMastery[cat].attempted++;

  const buttons = Array.from($('optionsGrid').children);
  buttons.forEach(b => {
    b.disabled = true;
    const txt = b.querySelector('.option-text').textContent;
    if (txt === correctText) {
      b.classList.add('correct');
    }
  });

  const fbBox = $('feedbackBox');
  if (optObj.isCorrect) {
    sessionStats.correct++;
    sessionStats.streak++;
    sessionStats.categoryMastery[cat].correct++;
    if (sessionStats.streak > sessionStats.bestStreak) {
      sessionStats.bestStreak = sessionStats.streak;
      localStorage.setItem('aeroquest_best_streak', sessionStats.bestStreak.toString());
    }
    playTone('correct');

    fbBox.className = 'feedback-box show good';
    fbBox.innerHTML = \`
      <div class="feedback-title">✓ Correct! Excellent job.</div>
      <div class="feedback-explain">\${currentQuestion.e}</div>
    \`;
  } else {
    sessionStats.streak = 0;
    selectedBtn.classList.add('wrong');
    playTone('wrong');

    fbBox.className = 'feedback-box show bad';
    fbBox.innerHTML = \`
      <div class="feedback-title">✕ Not quite. Correct answer: <strong>\${correctText}</strong></div>
      <div class="feedback-explain">\${currentQuestion.e}</div>
    \`;
  }

  $('nextBtn').disabled = false;
  updateStatsDisplay();
}

// Update Stats UI
function updateStatsDisplay() {
  $('statScore').textContent = sessionStats.correct;
  const acc = sessionStats.attempted > 0 
    ? Math.round((sessionStats.correct / sessionStats.attempted) * 100) 
    : 0;
  $('statAccuracy').textContent = \`\${acc}%\`;
  $('statStreak').textContent = \`🔥 \${sessionStats.streak}\`;
  $('statBest').textContent = \`🏆 \${sessionStats.bestStreak}\`;
  $('bookmarkCount').textContent = bookmarks.size;
}

// Exam Completion Alert
function showExamCompletion() {
  const pct = Math.round((sessionStats.correct / deck.length) * 100);
  let grade = 'A';
  if (pct < 60) grade = 'F';
  else if (pct < 70) grade = 'D';
  else if (pct < 80) grade = 'C';
  else if (pct < 90) grade = 'B';

  alert(\`🎯 Exam Complete!\\n\\nScore: \${sessionStats.correct} / \${deck.length} (\${pct}%)\\nGrade: \${grade}\\n\\nReturning to Infinite Practice Mode.\`);
  setMode('infinite');
}

// Mode & Filter Handling
function setSource(source) {
  activeSource = source;
  document.querySelectorAll('.pill-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.source === source);
  });
  buildDeck();
  nextQuestion();
}

function setMode(mode) {
  activeMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
  buildDeck();
  nextQuestion();
}

// Mastery Drawer Render
function openMasteryModal() {
  const container = $('masteryList');
  container.innerHTML = '';
  
  const cats = Object.keys(sessionStats.categoryMastery);
  if (cats.length === 0) {
    container.innerHTML = '<p style="color:var(--ink-muted); font-size:13px;">No questions answered yet. Start answering questions to see category mastery!</p>';
  } else {
    cats.sort().forEach(cat => {
      const data = sessionStats.categoryMastery[cat];
      const pct = Math.round((data.correct / data.attempted) * 100);
      const row = document.createElement('div');
      row.className = 'mastery-row';
      row.innerHTML = \`
        <div class="mastery-meta">
          <span>\${cat}</span>
          <span>\${data.correct}/\${data.attempted} (\${pct}%)</span>
        </div>
        <div class="mastery-bar-bg">
          <div class="mastery-bar-fill" style="width: \${pct}%;"></div>
        </div>
      \`;
      container.appendChild(row);
    });
  }

  // Bookmarks list
  const bList = $('bookmarkList');
  bList.innerHTML = '';
  if (bookmarks.size === 0) {
    bList.innerHTML = '<p style="color:var(--ink-muted); font-size:13px;">No bookmarked questions. Click the star icon on any question to bookmark it.</p>';
  } else {
    Array.from(bookmarks).forEach(id => {
      const q = BANK.find(item => item.id === id);
      if (q) {
        const item = document.createElement('div');
        item.className = 'bookmarked-item';
        item.innerHTML = \`
          <h4>\${q.q}</h4>
          <p>✓ \${q.o[q.a]}</p>
        \`;
        bList.appendChild(item);
      }
    });
  }

  $('masteryModal').classList.add('open');
}

function closeMasteryModal() {
  $('masteryModal').classList.remove('open');
}

// Event Listeners
document.querySelectorAll('.pill-btn').forEach(btn => {
  btn.addEventListener('click', () => setSource(btn.dataset.source));
});

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

$('catSelect').addEventListener('change', e => {
  activeCategory = e.target.value;
  buildDeck();
  nextQuestion();
});

$('resetDeckBtn').addEventListener('click', () => {
  buildDeck();
  nextQuestion();
});

$('nextBtn').addEventListener('click', nextQuestion);

$('skipBtn').addEventListener('click', () => {
  if (!isAnswerLocked) {
    sessionStats.attempted++;
    sessionStats.streak = 0;
    updateStatsDisplay();
  }
  nextQuestion();
});

$('starBtn').addEventListener('click', () => {
  if (!currentQuestion) return;
  if (bookmarks.has(currentQuestion.id)) {
    bookmarks.delete(currentQuestion.id);
  } else {
    bookmarks.add(currentQuestion.id);
  }
  localStorage.setItem('aeroquest_bookmarks', JSON.stringify(Array.from(bookmarks)));
  $('starBtn').textContent = bookmarks.has(currentQuestion.id) ? '★' : '☆';
  $('starBtn').className = bookmarks.has(currentQuestion.id) ? 'btn-star starred' : 'btn-star';
  updateStatsDisplay();
});

$('soundBtn').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem('aeroquest_sound', soundEnabled.toString());
  $('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
  $('soundTxt').textContent = soundEnabled ? 'Sound ON' : 'Sound OFF';
  $('soundBtn').classList.toggle('active', soundEnabled);
});

$('statsBtn').addEventListener('click', openMasteryModal);
$('closeMasteryBtn').addEventListener('click', closeMasteryModal);
$('masteryModal').addEventListener('click', e => {
  if (e.target === $('masteryModal')) closeMasteryModal();
});

// Keyboard Shortcuts
window.addEventListener('keydown', e => {
  // If typing in input/select or modal is open
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'Escape') {
    closeMasteryModal();
    return;
  }

  if (e.key === ' ' || e.key === 'Enter') {
    if (!$('nextBtn').disabled) {
      e.preventDefault();
      nextQuestion();
    }
  } else if (e.key === 's' || e.key === 'S') {
    $('skipBtn').click();
  } else if (e.key === 'b' || e.key === 'B') {
    $('starBtn').click();
  } else if (['1', '2', '3', '4'].includes(e.key)) {
    const idx = parseInt(e.key, 10) - 1;
    const btns = $('optionsGrid').children;
    if (btns[idx] && !isAnswerLocked) btns[idx].click();
  } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
    const idx = ['a', 'b', 'c', 'd'].indexOf(e.key.toLowerCase());
    const btns = $('optionsGrid').children;
    if (btns[idx] && !isAnswerLocked) btns[idx].click();
  }
});

// Initialize on load
initCategories();
buildDeck();
nextQuestion();
updateStatsDisplay();
$('soundBtn').classList.toggle('active', soundEnabled);
$('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
$('soundTxt').textContent = soundEnabled ? 'Sound ON' : 'Sound OFF';
</script>
</body>
</html>
`;

fs.writeFileSync('ground_handling_infinite_mcq_exam.html', htmlContent);
fs.writeFileSync('index.html', htmlContent);

console.log('App successfully built and saved to ground_handling_infinite_mcq_exam.html and index.html!');

