function updateScoreCardStyles() {
  document.querySelectorAll(".score-card").forEach((card) => {
    const rows = card.querySelectorAll(".score-row");
    if (rows.length !== 2) return;

    const [row1, row2] = rows;
    const score1 = parseInt(row1.querySelector(".score-value")?.textContent || "0", 10);
    const score2 = parseInt(row2.querySelector(".score-value")?.textContent || "0", 10);

    if (Number.isNaN(score1) || Number.isNaN(score2)) return;

    if (score1 > score2) {
      row1.classList.add("score-row--winner");
      row2.classList.add("score-row--loser");
    } else if (score2 > score1) {
      row2.classList.add("score-row--winner");
      row1.classList.add("score-row--loser");
    }
  });
}

document.addEventListener("DOMContentLoaded", updateScoreCardStyles);