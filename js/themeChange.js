document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random() * (0.3).toFixed(2);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
