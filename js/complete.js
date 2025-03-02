// Dynamic Date
const date = new Date();
const param = { month: "short", day: "numeric", year: "numeric" };
const currDate = date.toLocaleDateString("en-us", param);
const currDateWithoutComma = currDate.replace(",", "");
const weekDay = date.toLocaleDateString("en-us", { weekday: "long" });
document.getElementById("date").innerText = currDateWithoutComma;
document.getElementById("day-name").innerText = weekDay + " ,";

const completeBtns = document.getElementsByClassName("complete");

for (let comBtn of completeBtns) {
  comBtn.addEventListener("click", function (event) {
    alert("Board updated Successfully");
    // console.log(comBtn);

    // Get the titles
    const x = event.target.id;
    const title = getTitle(x - 1);

    // Dynamic Time
    const time = new Date();
    const currTime = time.toLocaleTimeString();

    this.disabled = true;

    const assignNum = parseInt(document.getElementById("assigned").innerText);
    document.getElementById("assigned").innerText = assignNum - 1;
    // console.log(assignNum);

    if (assignNum == 1) {
      alert("Congrats!!! You have completed all the current tasks ");
    }

    const checkedNum = parseInt(document.getElementById("checked").innerText);
    document.getElementById("checked").innerText = checkedNum + 1;

    addBlogs(title, currTime);
  });
}
