
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCznoxkdOZFy0YB9YgJgMHVo1NxZbe8FvU",
    authDomain: "datemanagement.firebaseapp.com",
    databaseURL: "https://datemanagement.firebaseio.com",
    projectId: "datemanagement",
    storageBucket: "",
    messagingSenderId: "159952801859"
  };
  firebase.initializeApp(config);



var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";

var database = firebase.database();



$("#submit").on("click", function(){

	employeeName = $("#employee-name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	monthlyRate = $("#monthly-rate").val().trim();

	database.ref().push({
		employeeName: employeeName,
		role: role, 
		startDate: startDate,
		monthlyRate: monthlyRate
	})

	console.log(employeeName)



})