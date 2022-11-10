import StudentReg from "./studentreg.js";

class StudentCourseReg extends StudentReg{
  constructor(name, id, semester, year, faculty, department, course) {
    super(name, id, semester, year, faculty, department);
    this.course = course;
  }
  course = [];
  totalCourse(){
    return this.course.length;
  }
  totalCompulsory(){
    return this.course.filter(course => course.courseType === 1).length;
  }
  totalElective(){
    return this.course.filter(course => course.courseType === 0).length;
  }
}

export default StudentCourseReg;