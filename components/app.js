class App {
  constructor(gradeTable) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError + this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
  }
   handleGetGradesError (error) {
   console.error(error);
  }
   handleGetGradesSuccess (grades) {
     this.gradeTable.updateGrades(grades);
  }
    getGrades() {
    $.ajax({
    type: "GET",
    url: "http://sgt.lfzprototypes.com/api/grades",
    headers: {"X-Access-Token": "NeFeSICL"},
    success: this.handleGetGradesSuccess,
    error: this.handleGetGradesError,
    })
 }
  start() {
    this.getGrades();
  }
}
