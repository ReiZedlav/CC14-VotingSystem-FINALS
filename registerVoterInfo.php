<?php
$server = "127.0.0.1";
$username = "root";
$password = "root";
$database = "votingsystem";
$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Error 69: Could not connect to database! " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $voterAddress = $_POST['voterAddress'];
    $voterCity = $_POST['voterCity'];
    $voterBarangay = $_POST['voterBarangay'];
    $voterAge = $_POST['voterAge']; 
    $voterBirthday = $_POST['voterBirthday'];
    $voterGender = $_POST['voterGender'];
    $voterStatus = $_POST['voterStatus'];
    $voterPhoneNumber = $_POST['voterPhoneNumber'];
    $voterEmail = $_POST['voterEmail'];
    $voterPassword = password_hash($_POST['voterPassword'], PASSWORD_BCRYPT); 

   
    $insertVoterQuery = "INSERT INTO Voters (FirstName, LastName) VALUES ('$firstName', '$lastName')";
    $conn->query($insertVoterQuery);
    $voterID = $conn->insert_id; 

    
    $insertContactQuery = "INSERT INTO VoterContacts (VoterID, EmailAddress, PhoneNumber) 
                           VALUES ('$voterID', '$voterEmail', '$voterPhoneNumber')";
    $conn->query($insertContactQuery);

    
    $insertAddressQuery = "INSERT INTO VoterAddress (VoterID, PermanentAddress, City, Barangay) 
                           VALUES ('$voterID', '$voterAddress', '$voterCity', '$voterBarangay')";
    $conn->query($insertAddressQuery);

   
    $insertBiodataQuery = "INSERT INTO VoterBiodata (VoterID, Age, Birthdate, Gender, CivilStatus) 
                           VALUES ('$voterID', '$voterAge', '$voterBirthday', '$voterGender', '$voterStatus')";
    $conn->query($insertBiodataQuery);

   
    $insertCredentialsQuery = "INSERT INTO VoterCredentials (VoterID, Password) 
                               VALUES ('$voterID', '$voterPassword')";
    $conn->query($insertCredentialsQuery);

    echo "Voter information has been successfully uploaded!";
}

// Close connection
$conn->close();
?>
