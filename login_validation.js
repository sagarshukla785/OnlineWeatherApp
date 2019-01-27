// Function to validate the username & password.
// and after redirect to the main page.
function process(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// if username is empty.
	if(username == ''){
		alert('Enter username.');
		return false;
	}

	// if password is empty.
    if(password == ''){
		alert('Enter password.');
		return false;
	}

	// Sending username and password to the server for further operation.
	var hr = new XMLHttpRequest();
	var url = "http://localhost/login_valid.php";
	var vars = "username="+username+"&password="+password;
	hr.open("POST", url, true);
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	hr.onreadystatechange = function(){
		if(hr.readyState == 4 && hr.status == 200){
			// Getting the response from the server.
			var return_data = hr.responseText;
			if(return_data == 'true'){
				window.location.href = "apipage.html";
			}
			else{
				alert(hr.responseText);
			}
		}
	}
	hr.send(vars);
	//alert(username + password);
	return false;
}

