class Person {
    name: string;
    age: number

    // Constructor to initialize the 'name' and 'age' properties.
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to get the name of the person.
    getName() {
        return this.name;
    }
}

// Define a class called 'Student' that inherits from 'Person'.
class Student extends Person {
    rollNumber: string;
    courses: string[] = [];  

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age); // super is a way for a child class to talk to its parent class
        this.rollNumber = rollNumber;  
    }

    // Method to register for a course.
    registerForCourse(course: string) {
        this.courses.push(course);
    }
}

class Instructor extends Person {
    private salary: number; // Make salary private
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age); // Call the parent class constructor.
        this.salary = salary;
    }

    // Method to assign a course to an instructor.
    assignCourses(course: Course) {
        this.courses.push(course);
    }
}

// Define a class called 'Course' to represent a course with students and an instructor.
class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor?: Instructor;

  
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    // Method to add a student to the course and register them for the course.
    addStudent(student: Student) {
        this.students.push(student);
        student.registerForCourse(this.name); 
    }

    // Method to set an instructor for the course.
    setInstructor(instructor: Instructor) {
        this.instructor = instructor;
    }
}


class Department {
    name: string;
    courses: Course[] = [];


    constructor(name: string) {
        this.name = name;
    }

    // Method to add a course to the department.
    addCourse(course: Course) {
        this.courses.push(course);
    }
}

// Create instances of students, instructors, courses, and a department.
const Student1 = new Student("Moutsim", 15, "Student1");
const Student2 = new Student("Agha", 14, "Student2");

const Instructor1 = new Instructor("Ameilia", 19, 120000);
const Instructor2 = new Instructor("Jeff Sett", 21, 175000);

const Course1 = new Course("Course1", "MetaVerse");
const Course2 = new Course("Course2", "Block Chain"); 

// Set an instructor for Course1 and add students to it.
Course1.setInstructor(Instructor1);
Course1.addStudent(Student1);
Course1.addStudent(Student2);

const Department1 = new Department("Computer Science");

// Add courses to the department.
Department1.addCourse(Course1);
Department1.addCourse(Course2); 

console.log(Course1); // Log the details of Course1.
