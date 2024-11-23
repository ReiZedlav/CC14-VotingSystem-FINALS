<?php
// Database connection using provided credentials
$server = "127.0.0.1";
$username = "root";
$password = "root";
$database = "votingsystem";

// Create connection
$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstName = $_POST['FirstName'];
    $lastName = $_POST['LastName'];
    $age = $_POST['Age'];
    $gender = $_POST['Gender'];
    $birthdate = $_POST['Birthdate'];
    $civilStatus = $_POST['CivilStatus'];
    $position = $_POST['Position'];
    $party = $_POST['Party'];
    $city = $_POST['City'];

    // Insert into Nominee table
    $sql_nominee = "INSERT INTO Nominee (FirstName, LastName) VALUES ('$firstName', '$lastName')";
    if ($conn->query($sql_nominee) === TRUE) {
        // Get the last inserted NomineeID
        $nomineeID = $conn->insert_id;

        // Insert into NomineeBioData table
        $sql_bio = "INSERT INTO NomineeBioData (NomineeID, Age, Gender, Birthdate, CivilStatus)
                    VALUES ('$nomineeID', '$age', '$gender', '$birthdate', '$civilStatus')";
        $conn->query($sql_bio);

        // Insert into NomineePosition table
        $sql_position = "INSERT INTO NomineePosition (NomineeID, Position, Party, City)
                         VALUES ('$nomineeID', '$position', '$party', '$city')";
        $conn->query($sql_position);

        echo "Nominee data inserted successfully!";
    } else {
        echo "Error: " . $sql_nominee . "<br>" . $conn->error;
    }
}

$conn->close();
?>