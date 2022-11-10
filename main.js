import Course from "./course.js";
import StudentCourseReg from "./studentcoursereg.js";

let course1 = new Course("CSC 101", "Introduction to Computer Science", "Introduction to Computer Science", 3, "Dr. John", 1);
let course2 = new Course("CSC 101", "Introduction to Computer Science", "Introduction to Computer Science", 3, "Dr. John", 0);
let course3 = new Course("CSC 101", "Introduction to Computer Science", "Introduction to Computer Science", 3, "Dr. John", 1);
let course4 = new Course("CSC 101", "Introduction to Computer Science", "Introduction to Computer Science", 3, "Dr. John", 1);

let array = [course1, course2, course3, course4];

let studentCourseReg = new StudentCourseReg("Mikle", 23456789, 1, 2022, "Art", "English", array);

console.log(studentCourseReg.totalCourse());
console.log(studentCourseReg.totalCompulsory());
console.log(studentCourseReg.totalElective());