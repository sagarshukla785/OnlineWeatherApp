// Function to validate all the required fields for registration.
function process(){
	var first_name = document.getElementById("fn").value;
	var last_name = document.getElementById("ln").value;
	var username = document.getElementById("ed").value;
	var pass_1 = document.getElementById("pass1").value;
	var pass_2 = document.getElementById("pass2").value;

	// If firstname is empty.
	if(first_name == ''){
		alert('Please enter the first name.');
		return false;
	}

	// If last name is empty.
    if(last_name == ''){
		alert('Please enter the last name.');
		return false;
	}

	// If username is empty.
	if(username == ''){
		alert('Please enter the Email Address.');
		return false;
	}

	// Checking if emailaddress is valid or not.
	if(username != ''){
		var re = /\S+@\S+\.\S+/;
			if(!re.test(username)){
				alert('Invalid Email Address.');
				return false;
			}
	}

	// If password is empty.
	if(pass_1 == ''){
		alert('Please enter password');
		return false;
	}

	// If password contains character less than 6.
	if(pass_1 != '' && pass_1.length < 6){
		alert('Password should contain atlest 6 characters.');
		return false;
	}

	// If user does not enter the password again for confirmation.
	if(pass_2 == ''){
		alert('Enter the password again.');
		return false;
	}

	// if password and confirm password is not same.
	if(pass_1 != pass_2){
		alert('Passwords are not same');
		return false;
	}

	// If all the fields are correct then sending the data to server for registration.
	else{
		var hr = new XMLHttpRequest();
		var url = "http://localhost/insert.php";
		var vars = "firstname="+first_name+"&lastname="+last_name+"&emailaddress="+username+"&password="+pass_1;
		hr.open("POST", url, true);
		hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
		hr.onreadystatechange = function(){
			if(hr.readyState == 4 && hr.status == 200){
				var return_data = hr.responseText;
				//document.getElementById("status").innerHTML = return_data;
			}
		}

		hr.send(vars);
		//document.getElementById("status").innerHTML = "processing...";
		alert('Registration Successfull.');
	}
}