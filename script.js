// Get elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const userTypeSelect = document.getElementById('userType');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Initial setup
loginForm.style.display = 'none';
signupForm.style.display = 'none';

// Event listeners
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';
});

signupBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';
});

// Form submission handling
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Perform login logic here
  
  // Redirect based on user type
  const userType = userTypeSelect.value;
  if (userType === 'patient') {
    // Redirect to patient page
    window.location.href = 'patient-personal-info.html';
  } else if (userType === 'hospital') {
    // Redirect to hospital page
    window.location.href = 'hospital-info.html';
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  
  // Perform signup logic here
  
  // Redirect based on user type
  const userType = userTypeSelect.value;
  if (userType === 'patient') {
    // Redirect to patient page
    window.location.href = 'patient-personal-info.html';
  } else if (userType === 'hospital') {
    // Redirect to hospital page
    window.location.href = 'hospital-info.html';
  }
});