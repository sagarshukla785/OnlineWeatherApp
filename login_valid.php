<?php
	$dbname = 'sapientproject1';
			$user = 'root';
			$pass = '';
			$database = new mysqli('localhost',$user,$pass,$dbname) or die("Unable to connect to database");
			
			$username = $_POST['username'];
			$password = $_POST['password'];

			if(isset($username) && isset($password)){
				$query = "SELECT * FROM usertable WHERE username = '$username' ";
				$query1 = "SELECT * FROM usertable WHERE password = '$password' and username = '$username'";

				$res = $database->query($query);
				$res1 = $database->query($query1);

				if($res->num_rows > 0 && $res1->num_rows > 0){
					echo "true";
				}
				else if($res->num_rows > 0 &&  $res1->num_rows == 0){
					echo "Password is Wrong.";
				}

				else{
					echo "User doesn't exist.";
				}
		 	}
?>