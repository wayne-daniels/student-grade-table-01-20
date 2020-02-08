class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError + this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGradeError = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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
    var table = document.querySelector('.mytable');
    table.innerHTML = "";

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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      type: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "NeFeSICL" },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    console.log(id);
    $.ajax({
      type: "DELETE",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      headers: { "X-Access-Token": "NeFeSICL" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    console.log('lol')
    this.getGrades();
  }
}
