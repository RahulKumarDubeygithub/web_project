const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	
	// TODO: validate the username and password
	
	// TODO: send a request to the server to log in the user
	
	// TODO: redirect the user to the appropriate page
});
