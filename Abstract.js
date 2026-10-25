// Abstract
class Employee {
    constructor(name){
        if (new.target === Employee){
            throw new Error ("Cannot create Employee directly");
        }

        this.name = name;
    }
}

const employee = new Employee ("John");
