"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    id;
    age;
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
}
class Student extends person {
    major;
    gpa;
    constructor(name, id, age, major, gpa) {
        super(name, id, age);
        this.major = major;
        this.gpa = gpa;
    }
    enroll(course) {
        console.log(`${this.name} has enrolled in the follwing ${course.name} `);
    }
}
class Professor extends person {
    Department;
    salery;
    constructor(name, id, age, Department, salery) {
        super(name, age, id);
        this.Department = Department;
        this.salery = salery;
    }
    teach(course) {
        console.log(`${this.name} is teaching ${course.name}`);
    }
}
class Course {
    id;
    name;
    credits;
    constructor(id, name, credits) {
        this.id = id;
        this.name = name;
        this.credits = credits;
    }
}
class Department {
    id;
    name;
    courses;
    constructor(id, name, courses = []) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
class University {
    students = [];
    professors = [];
    courses = [];
    departments = [];
    addStudent(student) {
        this.students.push(student);
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    findStudentById(id) {
        return this.students.find(student => student.id === id);
    }
    findProfessorById(id) {
        return this.professors.find(professor => professor.id === id);
    }
    findCourseById(id) {
        return this.courses.find(course => course.id === id);
    }
    findDepartmentById(id) {
        return this.departments.find(department => department.id === id);
    }
}
const university = new University();
const student1 = new Student("Ali", 1, 18, "computer Science", 3.4);
const student2 = new Student("Aslam", 2, 19, "Mechanical ENgenering", 3.4);
const professor1 = new Professor("Aqib", 1, 30, "Mechanical ENgenering", 100000);
const professor2 = new Professor("Ansar", 2, 36, "Social Sciences", 100000);
const course1 = new Course(1, "internet of thing", 3);
const course2 = new Course(1, "Data structuere", 3);
const department1 = new Department(1, "Information Technology");
const department2 = new Department(2, "BBa");
department1.addCourse(course1);
department2.addCourse(course2);
university.addStudent(student1);
university.addStudent(student2);
university.addProfessor(professor1);
university.addProfessor(professor2);
university.addCourse(course1);
university.addCourse(course2);
university.addDepartment(department1);
university.addDepartment(department2);
student1.enroll(course1);
professor1.teach(course1);
console.log(university.findStudentById(1));
console.log(university.findProfessorById(1));
console.log(university.findCourseById(1));
console.log(university.findDepartmentById(1));
