<?php
	$dbname = 'sapientproject1';
			$user = 'root';
			$pass = '';
			$database = new mysqli('localhost',$user,$pass,$dbname) or die("Unable to connect to database");
			
			$username = $_POST['emailaddress'];
			$firstname = $_POST['firstname'];
			$lastname = $_POST['lastname'];
			$password = $_POST['password'];
			
			$query = "insert into usertable(username, password, first_name, last_name) values('$username','$password','$firstname', '$lastname')";
			
			$database->query($query);
?>