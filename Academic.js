import Student from "./students.js";

class Academic extends Student {
  constructor(name, id, semester, year) { 
    super(name, id);
    this.semester = semester;
    this.year = year;
  }
  semester = '';
  year = '';
}

export default Academic;