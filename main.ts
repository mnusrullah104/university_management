class person {
    constructor(
        public name: string,
       public id:   number,
       public age: number
    ){}
}
class Student extends person{
    constructor(
         name: string,
         id: number,
         age: number,
         public major:string,
         public gpa:number

    ){
        super(name,id,age)
    }
    enroll(course:Course):void{
console.log(`${this.name} has enrolled in the follwing ${course.name} `)
    }
}

class Professor extends person{
    constructor(
        name: string,
        id: number,
        age: number,
        public Department: string,
        public salery: number,
    ){
        super(name,age,id)
    }
    teach(course:Course):void{
        console.log(`${this.name} is teaching ${course.name}`);
    }
}

class Course{
    constructor(
        public id: number,
        public name: string,
        public credits: number
    ){}
}

class Department{
    constructor(
        public id:number,
        public  name: string,
        public courses:Course[]=[]
    ){}
    addCourse (course:Course):void{
        this.courses.push(course)
    }
}

class University {
    private students: Student[] = [];
    private professors: Professor[] = [];
    private courses: Course[] = [];
    private departments: Department[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addProfessor(professor: Professor): void {
        this.professors.push(professor);
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    addDepartment(department: Department): void {
        this.departments.push(department);
    }

    findStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    findProfessorById(id: number): Professor | undefined {
        return this.professors.find(professor => professor.id === id);
    }

    findCourseById(id: number): Course | undefined {
        return this.courses.find(course => course.id === id);
    }

    findDepartmentById(id: number): Department | undefined {
        return this.departments.find(department => department.id === id);
    }
}

const university =new University();

const student1= new Student("Ali",1,18,"computer Science",3.4);
const student2= new Student("Aslam",2,19,"Mechanical ENgenering",3.4)


const professor1= new Professor("Aqib",1,30,"Mechanical ENgenering",100000)
const professor2= new Professor("Ansar",2,36,"Social Sciences",100000)


const course1 =new Course(1,"internet of thing",3)
const course2 =new Course(1,"Data structuere",3)

const department1= new Department(1,"Information Technology")
const department2= new Department(2,"BBa")

department1.addCourse(course1)
department2.addCourse(course2)

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



