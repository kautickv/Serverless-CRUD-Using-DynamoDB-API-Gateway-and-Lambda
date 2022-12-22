// By Default, when page loads, make all form component invisible
window.document.getElementById("addStudentDiv").style.visibility = "hidden";
window.document.getElementById("addStudentDiv").style.display = "none";
window.document.getElementById("updateStudentDiv").style.visibility = "hidden";
window.document.getElementById("updateStudentDiv").style.display = "none";
window.document.getElementById("deleteStudentDiv").style.visibility = "hidden";
window.document.getElementById("deleteStudentDiv").style.display = "none";

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

function listAllStudent() {
 // This function will send an HTTP post request to the lambda function.

  fetch("https://x1chs40000.execute-api.us-east-1.amazonaws.com/Prod/dynamodbmanager", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 78912 }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

function addStudent() {}

function updateStudent() {}

function deleteStudent() {}
