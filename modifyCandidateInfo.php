<?php

$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "votingsystem";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $candidateID = $_POST['candidateID'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $birthdate = $_POST['birthdate'];
    $civilStatus = $_POST['civilStatus'];
    $position = $_POST['position'];
    $party = $_POST['party'];
    $city = $_POST['city'];

    $updateNomineeSQL = "UPDATE Nominee SET FirstName = '$firstName', LastName = '$lastName' WHERE NomineeID = (SELECT NomineeID FROM Candidate WHERE CandidateID = $candidateID)";
    $conn->query($updateNomineeSQL);

    $updateBioDataSQL = "UPDATE NomineeBioData SET Age = '$age', Gender = '$gender', Birthdate = '$birthdate', CivilStatus = '$civilStatus' WHERE NomineeID = (SELECT NomineeID FROM Candidate WHERE CandidateID = $candidateID)";
    $conn->query($updateBioDataSQL);

    $updatePositionSQL = "UPDATE NomineePosition SET Position = '$position', Party = '$party', City = '$city' WHERE NomineeID = (SELECT NomineeID FROM Candidate WHERE CandidateID = $candidateID)";
    $conn->query($updatePositionSQL);

    echo "Nominee details updated successfully!";
}

$conn->close();
?>
