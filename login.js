const users = [
  { role: "team", username: "teamuser", password: "teampass" },
  { role: "manager", username: "manageruser", password: "managerpass" },
  { role: "client", username: "clientuser", password: "clientpass" },
];

function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (u) => u.role === role && u.username === username && u.password === password
  );

  if (user) {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}
