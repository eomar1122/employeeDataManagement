
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCznoxkdOZFy0YB9YgJgMHVo1NxZbe8FvU",
    authDomain: "datemanagement.firebaseapp.com",
    databaseURL: "https://datemanagement.firebaseio.com",
    projectId: "datemanagement",
    storageBucket: "datemanagement.appspot.com",
    messagingSenderId: "159952801859"
  };
  firebase.initializeApp(config);



var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";


var database = firebase.database();



$("#submit").on("click", function(){

	event.preventDefault();

	employeeName = $("#employee-name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	monthlyRate = $("#monthly-rate").val().trim();


	database.ref().push({
		employeeName: employeeName,
		role: role, 
		startDate: startDate,
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP


// var monthWorked = ;
//     totalBill = ;

var generateRow = $(“<tr>“);
    generateRow.html(“<td>” + employeeName + “</td>“+”<td>” + role + “</td>“+”<td>” + startDate + “</td>“+”<td>” + monthWorked + “</td>“+”<td>” + monthlyRate + “</td>“+”<td>” + totalBill + “</td>“);
    

    $(“#add-employee”).append(generateRow);


	database.ref().on("child_added", function(childSnapshot){

		console.log(childSnapshot.val().employeeName)

	})

	//console.log(employeeName)



})