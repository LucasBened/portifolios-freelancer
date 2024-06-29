const bernBtn = document.getElementById("bern");
const brenoBtn = document.getElementById("breno");
const iranBtn = document.getElementById("iran");
const eduBtn = document.getElementById("edu");

window.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");

  console.log("pegou o " + username);
  if (username) {
    const user = document.getElementById("user");
    user.textContent = `SEJA BEM VINDO(a) ${username}`;
  }
});

bernBtn.addEventListener("click", () => {
  window.location.href = "/bernardoPort.html";
});

brenoBtn.addEventListener("click", () => {
  window.location.href = "/brenoPort.html";
});

iranBtn.addEventListener("click", () => {
  window.location.href = "/iranPort.html";
});

eduBtn.addEventListener("click", () => {
  window.location.href = "/eduPort.html";
});

function setup() {
  let bernElement = select("#bern");
  bernElement.mouseOver(changeColor);
  bernElement.mouseOut(resetColor);

  let eduElement = select("#edu");
  eduElement.mouseOver(changeColor);
  eduElement.mouseOut(resetColor);

  let brenoElement = select("#breno");
  brenoElement.mouseOver(changeColor);
  brenoElement.mouseOut(resetColor);

  let iranElement = select("#iran");
  iranElement.mouseOver(changeColor);
  iranElement.mouseOut(resetColor);
}

function changeColor() {
  this.style("background-color", "gray");
}

function resetColor() {
  this.style("background-color", "");
}

setup();
