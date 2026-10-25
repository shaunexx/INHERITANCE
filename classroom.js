//  Classroom & Student Example
class Classroom {
    constructor(section) {
        this.section = section;
        this.student = [];
    }

    addStudent(name) {
        this.student.push(name);
    }

    displayStudent() {
        for (const student of this.student) {
            console.log(student.name);
        }
    }
}

const room = new Classroom("BSIT 2C");

room.addStudent(new Student("Harold"));
room.addStudent(new Student("Olita"));
room.addStudent(new Student("Geven"));
room.displayStudent();
