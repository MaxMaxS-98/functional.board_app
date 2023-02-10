const nanoid = require('nanoid')
const signupFormHandler = async (event) => {
    event.preventDefault();
    const fullname = document.querySelector('#fullname-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirm = document.querySelector('#password-confirm').value.trim();
    const isConfirmed = password && confirm && (password === confirm)
    const id = await nanoid()

    switch (true) {
        case !fullname:
            alert('Please enter your full name.');
            return;
        case !username:
            alert('Please enter a username.');
            return;
        case !email:
            alert('Please enter an email address.');
            return;
        case !isConfirmed:
            alert('Please check your password.');
            return;
        case password.length < 8:
            alert('Password must be at least 8 characters long.');
            return;
        default:
            break;
    }

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ id, fullname, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    };
    
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);