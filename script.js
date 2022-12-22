
// Global variables
var dynamoDBTableName = "lambda-apigateway-student_info";
var APIURL = "https://x1chs40000.execute-api.us-east-1.amazonaws.com/Prod/dynamodbmanager";

// By Default, when page loads, make all form component invisible
window.document.getElementById("addStudentDiv").style.visibility = "hidden";
window.document.getElementById("addStudentDiv").style.display = "none";
window.document.getElementById("updateStudentDiv").style.visibility = "hidden";
window.document.getElementById("updateStudentDiv").style.display = "none";
window.document.getElementById("deleteStudentDiv").style.visibility = "hidden";
window.document.getElementById("deleteStudentDiv").style.display = "none";

// Populate all students table
listAllStudent();

function displayAddStudentForm() {
  // This function will display the form to the user to add a new student.
  // And hide all other components
  window.document.getElementById("addStudentDiv").style.visibility = "visible";
  window.document.getElementById("addStudentDiv").style.display = "block";

  //hide all other forms
  window.document.getElementById("updateStudentDiv").style.visibility =
    "hidden";
  window.document.getElementById("updateStudentDiv").style.display = "none";
  window.document.getElementById("deleteStudentDiv").style.visibility =
    "hidden";
  window.document.getElementById("deleteStudentDiv").style.display = "none";
}

function displayUpdateStudentForm() {
  // This function will display the form to the user to update a student.
  // And hide all other components
  window.document.getElementById("updateStudentDiv").style.visibility =
    "visible";
  window.document.getElementById("updateStudentDiv").style.display = "block";
  //hide all other forms
  window.document.getElementById("addStudentDiv").style.visibility = "hidden";
  window.document.getElementById("addStudentDiv").style.display = "none";
  window.document.getElementById("deleteStudentDiv").style.visibility =
    "hidden";
  window.document.getElementById("deleteStudentDiv").style.display = "none";
}

function displayDeleteStudentForm() {
  // This function will display the form to the user to delete a student.
  // And hide all other components
  window.document.getElementById("deleteStudentDiv").style.visibility =
    "visible";
  window.document.getElementById("deleteStudentDiv").style.display = "block";

  //hide all other forms
  window.document.getElementById("addStudentDiv").style.visibility = "hidden";
  window.document.getElementById("addStudentDiv").style.display = "none";
  window.document.getElementById("updateStudentDiv").style.visibility =
    "hidden";
  window.document.getElementById("updateStudentDiv").style.display = "none";
}

async function listAllStudent() {
 // This function will send an HTTP post request to the lambda function.

  var payload = {
    "operation": "list",
    "tableName": dynamoDBTableName,
    "payload": {
      "Item": {}
    }
  }

  fetch(APIURL, {
    method: "POST",
    headers: {
      "Content-Type": "text/pain",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(data =>{
       recreateTableInHTML(data);
    })
    .catch(err =>{
        console.log("An error occurred while trying to get all the data from DB: " + err);
    })
}

function recreateTableInHTML(data){
    // This function takes in a json object containing all the data from the database
    // Will print the data into the table in the html file.

    items = data["Items"];
    // Clean the table body
    window.document.getElementById("tableBody").innerHTML="";
    var block = ''
    // Build HTML block for table body
    for (var key in items){
        block = block + '<tr>';
        block = block + '<th scope="row">' + key + '</th>';
        block = block + '<td>' + items[key]['first_name']['S'] + '</td>';
        block = block + '<td>' + items[key]['last_name']['S'] + '</td>';
        block = block + '<td>' + items[key]['id']['S'] + '</td>';
        block = block + '<td>' + items[key]['address']['S'] + '</td>';
        block = block + '</tr>'
    }
    // Add  block to table
    window.document.getElementById("tableBody").innerHTML = block;
}


async function addStudent() {
    // This function will read in the values in the form and add a student in the database

    var firstName = window.document.getElementById("firstNameAdd").value
    var lastName = window.document.getElementById("lastNameAdd").value
    var email = window.document.getElementById("inputEmailAdd").value
    var address = window.document.getElementById("inputAddressAdd").value

    // Insert element in database
    payload = {
        "operation": "create",
        "tableName": dynamoDBTableName,
        "payload": {
        "Item": {
            "id": email,
            "first_name": firstName,
            "last_name": lastName,
            "address": address
            }
        }
    }

    fetch(APIURL,{
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {response.json()})
    .then(data => {
        if (data['ResponseMetadata']['HTTPStatusCode'] === 200){
            alert("Student inserted in Database")
        }else{
            throw new Error ('Data was not inserted in Database');
        }
    })
    .catch(err =>{
        console.log("There was an error inserting element into database: " + err);
    })

}

function updateStudent() {}

function deleteStudent() {}
