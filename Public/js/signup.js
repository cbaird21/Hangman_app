const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector(".input_user")
    .value.trim();
  const password = document
    .querySelector(".input_pass")
    .value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response);
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login_btn")
  .addEventListener("click", signupFormHandler);
