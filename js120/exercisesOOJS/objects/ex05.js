/*
Create a school object. The school object uses the same kind of student object as the previous exercise. 
It has methods that use and update information about the student. 
Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. 
The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
Returns a student object if year is valid otherwise it logs "Invalid Year".

enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively.

incorporate feedback
*/

function createSchool() {
  return {
    VALID_YEARS: ['1st', '2nd', '3rd', '4th', '5th'],
    STUDENTS: {},

    validYear(year) {
      if (this.VALID_YEARS.includes(year)) return true;
    },

    addStudent(name, year) {
      if (this.validYear(year)) {
        let student = createStudent(name, year);
        this.STUDENTS[student.name] = student;
        return student;
      }
      console.log("Invalid Year");
    },

    enrollStudent(student, courseName, courseCode) {
      let course = {name: courseName, code: courseCode};
      student.addCourse(course);
    },
    
    addGrade(studentName, courseCode, grade) {
      let course = this.STUDENTS[studentName]['courses'].find(course => course['code'] === courseCode);
      course['grade'] = grade;
    },

    getReportCard(studentObj) {
      studentObj['courses'].forEach(course => {
        let grade = course.grade ? course.grade : 'In progress';
        console.log(`${course.name}: ${grade}`);
      })
      console.log('\n');
    },

    courseReport(courseName) {
      let grades = [];
      
      for (let student in this.STUDENTS) {
        let course = this.STUDENTS[student]['courses'].find(course => course['name'] === courseName);

        if (course !== undefined && course.hasOwnProperty('grade')) {
          grades.push([student, course['grade']]);
        }
      }
      
      if (grades.length == 0) return undefined;

      let average = grades.reduce((gradeTotal, gradeArr) => gradeTotal + gradeArr[1], 0) / grades.length;

      console.log(`=${courseName} Grades=`)
      grades.forEach(([nameStudent, gradeStudent]) => console.log(`${nameStudent}: ${gradeStudent}`));
      console.log(`--gi-\nCourse Average: ${average}\n`);
    }
  }
}

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    findCourse(code) {
      return this.courses.filter(course => course['code'] === code)[0];
    }, 
  };
}

let school = createSchool()
let paul = school.addStudent('Paul', '3rd');
let mary = school.addStudent('Mary', '1st');
let kim = school.addStudent('Kim', '2nd');

school.enrollStudent(paul, 'Math', 101);
school.enrollStudent(paul, 'Advanced Math', 102);
school.enrollStudent(paul, 'Physics', 202);

school.enrollStudent(mary, 'Math', 101);

school.enrollStudent(kim, 'Math', 101);
school.enrollStudent(kim, 'Advanced Math', 102);

school.addGrade('Paul', 101, 95);
school.addGrade('Paul', 102, 90);

school.addGrade('Mary', 101, 91);

school.addGrade('Kim', 101, 93);
school.addGrade('Kim', 102, 90);


// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

// console.log(paul);
// {
//   name: 'Paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }


school.getReportCard(paul);
/* 
Math: 95
Advanced Math: 90
Physics: In progress
*/

school.courseReport('Math');
/*
= =Math Grades=
= Paul: 95
= Mary: 91
= Kim: 93
= ---
= Course Average: 93
*/

school.courseReport('Advanced Math');
/*
= =Advanced Math Grades=
= Paul: 90
= Kim: 90
= ---
= Course Average: 90
*/

school.courseReport('Physics');
// = undefined
