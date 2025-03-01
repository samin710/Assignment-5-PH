const completeBtns = document.getElementsByClassName("complete");

for (let comBtn of completeBtns) {
  comBtn.addEventListener("click", function (event) {
    // console.log(comBtn);
    // Get the titles
    const x = event.target.id;
    // console.log(x);
    // console.log(getTitle(x-1));
    const title = getTitle(x - 1);

    // Time
    const time = new Date();
    const currTime = time.toLocaleTimeString();

    this.disabled = true;
    const assignNum = parseInt(document.getElementById("assigned").innerText);
    // console.log(assignNum);

    document.getElementById("assigned").innerText = assignNum - 1;
    // console.log(assignNum);

    const checkedNum = parseInt(document.getElementById("checked").innerText);

    document.getElementById("checked").innerText = checkedNum + 1;
    // console.log(checkedNum);

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
  });
}
