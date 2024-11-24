<?php
$server = "127.0.0.1";
$username = "root";
$password = "root";
$database = "votingsystem";

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['FirstName'];
    $lastName = $_POST['LastName'];
    $age = $_POST['Age'];
    $gender = $_POST['Gender'];
    $birthdate = $_POST['Birthdate'];
    $civilStatus = $_POST['CivilStatus'];
    $position = $_POST['Position'];
    $party = $_POST['Party'];
    $city = $_POST['City'];

    $sql_nominee = "INSERT INTO Nominee (FirstName, LastName) VALUES ('$firstName', '$lastName')";
    if ($conn->query($sql_nominee) === TRUE) {
        $nomineeID = $conn->insert_id;

        $sql_bio = "INSERT INTO NomineeBioData (NomineeID, Age, Gender, Birthdate, CivilStatus)
                    VALUES ('$nomineeID', '$age', '$gender', '$birthdate', '$civilStatus')";
        $conn->query($sql_bio);

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