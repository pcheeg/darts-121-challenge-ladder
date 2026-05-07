function renderLives() {
  els.lives.textContent =
    Array.from(
      { length: MAX_LIVES },
      (_, i) => i < currentRun.lives ? "♥" : "♡"
    ).join(" ");
}
