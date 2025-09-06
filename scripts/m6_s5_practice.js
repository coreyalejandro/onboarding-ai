// Simple 30s timer bar
const progress = document.getElementById('timerProgress');
let t = 0;
const total = 30_000;
const interval = 100;
const handle = setInterval(() => {
  t += interval;
  if (progress) {
    const pct = Math.min(100, Math.round((t / total) * 100));
    progress.style.width = pct + '%';
  }
  if (t >= total) clearInterval(handle);
}, interval);
