class Person {
    // Constructor to initialize the 'name' and 'age' properties.
    constructor(name, age) {
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
    constructor(name, age, rollNumber) {
        super(name, age); // super is a way for a child class to talk to its parent class
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    // Method to register for a course.
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age); // Call the parent class constructor.
        this.courses = [];
        this.salary = salary;
    }
    // Method to assign a course to an instructor.
    assignCourses(course) {
        this.courses.push(course);
    }
}
// Define a class called 'Course' to represent a course with students and an instructor.
class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    // Method to add a student to the course and register them for the course.
    addStudent(student) {
        this.students.push(student);
        student.registerForCourse(this.name);
    }
    // Method to set an instructor for the course.
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    // Method to add a course to the department.
    addCourse(course) {
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
export {};
