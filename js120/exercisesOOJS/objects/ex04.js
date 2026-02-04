/*
Create an object factory for a student object. 
The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
*/


function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`Name: ${this.name}; Year: ${this.year}`);
    },

    addcourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    findCourse(code) {
      return this.courses.filter(course => course['code'] = code)[0];
    }, 
    
    addNote(code, note) {
      let course = this.findCourse(code);
      if (Array.isArray(course['notes'])) {
        course['notes'].push(note);
      } else {
        course['notes'] = [note];
      }
    },

    updateNotes(code, oldNoteIndex, newNote) {
      let course = this.findCourse(code)
      course['notes'][oldNoteIndex] = newNote;
      
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (Array.isArray(course.notes) && course.notes.length > 0) {
          course.notes.forEach(note => console.log(note));
        }
      })
    }
  };
}



// TEST CASES:
let student = createStudent('John', 2005);
let french = {name: 'French', code: 125}

student.info();
student.addcourse(french);
console.log(student.listCourses());
student.addNote(125, 'test');
student.addNote(125, 'test2');
student.viewNotes();
student.updateNotes(125, 0, 'updated');
student.viewNotes();







