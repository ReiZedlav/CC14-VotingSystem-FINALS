<?php

$servername = "127.0.0.1";  
$username = "root";         
$password = "root";         
$dbname = "votingsystem";   

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomineeID = $_POST['nomineeID'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $position = $_POST['position'];
    $party = $_POST['party'];
    $city = $_POST['city'];

    $sql = "SELECT n.NomineeID, n.FirstName, n.LastName, np.Position, np.Party, np.City
            FROM Nominee n
            LEFT JOIN NomineePosition np ON n.NomineeID = np.NomineeID
            WHERE 1=1";  

    if (!empty($nomineeID)) {
        $sql .= " AND n.NomineeID = '$nomineeID'";
    }
    if (!empty($firstName)) {
        $sql .= " AND n.FirstName LIKE '%$firstName%'";
    }
    if (!empty($lastName)) {
        $sql .= " AND n.LastName LIKE '%$lastName%'";
    }
    if (!empty($position)) {
        $sql .= " AND np.Position LIKE '%$position%'";
    }
    if (!empty($party)) {
        $sql .= " AND np.Party LIKE '%$party%'";
    }
    if (!empty($city)) {
        $sql .= " AND np.City LIKE '%$city%'";
    }

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>";
        echo "<tr><th>Nominee ID</th><th>First Name</th><th>Last Name</th><th>Position</th><th>Party</th><th>City</th></tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['NomineeID'] . "</td>";
            echo "<td>" . $row['FirstName'] . "</td>";
            echo "<td>" . $row['LastName'] . "</td>";
            echo "<td>" . $row['Position'] . "</td>";
            echo "<td>" . $row['Party'] . "</td>";
            echo "<td>" . $row['City'] . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "No results found.";
    }
}

?>