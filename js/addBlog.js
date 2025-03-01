function addBlogs(title, currTime) {
  const historyContainer = document.getElementById("history-box");

  const history = document.createElement("div");
  history.classList.add(
    "bg-sky-50",
    "rounded-xl",
    "m-3",
    "px-3",
    "py-2",
    "primary-font",
    "text-[#00303C]"
  );

  history.innerHTML = `
    <p>You have completed the task ${title} at ${currTime}</p>`;

  historyContainer.appendChild(history);
}
