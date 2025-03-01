function getTitle(value) {
  const boxTitle = document.getElementsByClassName("box-title");
  //   console.log(boxTitle[value].innerText);
  const title = boxTitle[value].innerText;
  return title;
}
