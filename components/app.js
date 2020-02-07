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
  this.gradeForm.onSubmit(this.createGrade);
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
handleCreateGradeError(error){
  console.error(error);
}
handleCreateGradeSuccess(){
  this.getGrades();
}
}
