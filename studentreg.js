import Academic from "./Academic.js";

class StudentReg extends Academic {
  constructor(name, id, semester, year, faculty, department) {
    super(name, id, semester, year);
    this.faculty = faculty;
    this.department = department;
  }
  faculty = '';
  department = '';
}

export default StudentReg;