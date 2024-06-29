const loginForm = document.getElementById("login-form");

document.addEventListener("DOMContentLoaded", () => {
  function login(username, password) {
    const userJSON = localStorage.getItem(username);
    const user = JSON.parse(userJSON);

    if (user && user.password === password) {
      localStorage.setItem("username", username);
      return true;
    } else {
      return false;
    }
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("nome-login").value;
    const password = document.getElementById("senha-login").value;

    if (login(username, password)) {
      window.location.href = "/mainLogged.html";
    } else {
      alert("Nome de usuário ou senha incorretos.");
    }
  });
});
