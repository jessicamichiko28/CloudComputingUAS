document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let userType = document.getElementById("userType").value;

  // Validate username and password (add your validation logic here)
  if (username === "admin" && password === "password") {
    document.getElementById("message").textContent = "Login successful!";
    if (userType === "patient") {
      window.location.href = 'patient-login.html'; // Redirect to patient page
    } else if (userType === "hospital") {
      window.location.href = 'hospital-login.html'; // Redirect to hospital page
    }
  } else {
    document.getElementById("message").textContent = "Invalid credentials. Please try again.";
  }
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Add sign up logic here
});

document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
});

document.getElementById("signupBtn").addEventListener("click", function() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
});