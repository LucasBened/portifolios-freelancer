const loginBtn = document.getElementById("btnLogin");
const registerBtn = document.getElementById("btnRegister");

loginBtn.addEventListener("click", () => {
  window.location.href = "/login.html";
});

registerBtn.addEventListener("click", () => {
  window.location.href = "/register.html";
});

