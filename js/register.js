const registerForm = document.getElementById("register-form");

document.addEventListener("DOMContentLoaded", () => {
  function register(username, password) {
    if (localStorage.getItem(username)) {
      alert("Este usuário já está cadastrado.");
      return false;
    }

    const user = {
      username: username,
      password: password,
    };

    const userJSON = JSON.stringify(user);

    localStorage.setItem(username, userJSON);
    return true;
  }

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("nome-register").value;
    const password = document.getElementById("senha-register").value;

    if (register(username, password)) {
      window.location.href = "/login.html";
    }
  });
});
