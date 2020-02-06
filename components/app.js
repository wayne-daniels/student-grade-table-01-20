class App {
  constructor() {
    this.handleGetGradesError = handleGetGradesError;
    this.handleGetGradesSuccess = handleGetGradesSuccess;
  }
   handleGetGradesError: function (error) {
   console.error(error);
  }
   handleGetGradesSuccess: function (grades) {
   console.log(grades);
  }
  getGrades() {
$.ajax({
  type: "GET",
  url: "/api/grades",
  data: none,
  headers: {"X-Access-Token": "NeFeSICL"},
  success: function () {
    this.handleGetGradesSuccess;
  }
  error: function (){
    this.handleGetGradesError;
  }
  Start() {
    this.getGrades;
  }
 }
}
