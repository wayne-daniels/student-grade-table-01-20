class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError + this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradeTotal = 0;
    for (var i = 0; i < grades.length; i++) {
      gradeTotal += grades[i].grade;
    }
    var avGrade = gradeTotal / grades.length;
    this.pageHeader.updateAverage(avGrade);
  }
  getGrades() {
    $.ajax({
      type: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "NeFeSICL" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
  }
}
