<?php
	$dbname = 'sapientproject1';
			$user = 'root';
			$pass = '';
			$database = new mysqli('localhost',$user,$pass,$dbname) or die("Unable to connect to database");
			
			$username = $_POST['username'];
			
			if(isset($username) && isset($password)){
				$query = "SELECT * FROM usertable WHERE username = '$username' ";

				$res = $database->query($query);
				
				if($res->num_rows > 0){
					echo "true";
				}
				else{
					echo "false";
				}
		 	}
?>