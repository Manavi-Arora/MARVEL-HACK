document.getElementById('login-form').addEventListener('submit',async function(event) {
    event.preventDefault();
    const usernameOrEmail = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // You can add your login logic here
    console.log('Login:', { usernameOrEmail, password });

    let res = await fetch (`http://172.20.10.5:3000/api/v1/auth/signin`, {
      method: 'POST',
      body: {usernameOrEmail, password}
    });
  });
  
  document.getElementById('signup-form').addEventListener('submit',async function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    // You can add your signup logic here
    console.log('Sign Up:', { username, email, password });
    let res = await fetch (`http://172.20.10.5:3000/api/v1/auth/signup`, {
      method: 'POST',
      body: {username, email, password}
    });
    let data = await res.json();
    console.log(data); 

  });
  