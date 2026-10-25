class Phones {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    call(number) {
        console.log(`${this.model} is calling ${number}`);
    }

    sendMessage(message) {
        console.log(`${this.model}: ${message}`);
    }
}

class Smart_phone extends Phones {
    constructor(brand, model, os) {
        super(brand, model);
        this.os = os;
    }

    browseInternet() {
        console.log(`${this.model} is browsing the internet`);
    }

    installApp(apps) {
        console.log(`${this.apps} installed on ${this.model}`);
    }
}

const phones = Smart_phone (
    "Samsung",
    "Galaxy S25",
    "Android"
);

phones.call("09922286702");
phones.send_Messages("Hello this is harold!");
phones.browse_Internet();
phones.install_Apps("Spotify");


class SmartDevice {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    call(number) {
        console.log(`${this.model} is calling ${number}`);
    }

    sendMessage(message) {
        console.log(`${this.model}: ${message}`);
    }
}

class SmartPhone extends SmartDevice {
    constructor(brand, model, color, os) {
        super(brand, model, color);
        this.os = os;
    }

    call(number) {
        console.log(`${this.model} is making a smart call to ${number} using ${this.os}`);
    }

    browseInternet() {
        console.log(`${this.model} is browsing the internet`);
    }

    installApp(app) {
        console.log(`${this.app} installed on ${this.model}`);
    }

    app(appName = "DefaultApp") {
        this.installApp(appName);
    }
}

const device = new SmartDevice(
    "Samsung",
    "A15",
    "White Flash"
);

const smartPhone = new SmartPhone(
    "Samsung",
    "Galaxy S25",
    "Phantom Black",
    "Android"
);

const smartDevices = [device, smartPhone];

for (const currentDevice of smartDevices) {
    currentDevice.call("09922286702");
}
```[cite: 1, 2]

---

### 2. Classroom & Student Example
```javascript
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
```[cite: 4]

---

### 3. Book Callback Example (`geven1.js`)
```javascript
class Book {
    constructor(title) {
        this.title = title;
    }

    borrow(callback) {
        console.log("Borrowing:" + this.title);
        callback(this.title);
    }

    returnBook(callback) {
        console.log("Returned Book:" + this.title);
        callback(this.title);
    }
}

function borrowed(title) {
    console.log(title + "has been borrowed successfully");
}

function returned(title) {
    console.log(title + "has been returned successfully");
}

const book1 = new Book("JUST JS!!!");

book1.borrow(borrowed);
book1.returnBook(returned);
```[cite: 5]

---

### 4. Fetch API Example (`fetch.js`)
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => {
        const { name, username, email, address: { street, suite, city, zipcode, geo:{ lat, lng } } } = data;

        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Address:", street );
        console.log("Suite:", suite );
        console.log("City:", city );
        console.log("zipcode:", zipcode );
        console.log("Lat:", lat);
        console.log("Lng:", lng);
    })
    .catch((error) => {
        console.log(error);
    });
```[cite: 6]

---

### 5. Abstract Class Simulation (`abstract.js`)
```javascript
class Employee {
    constructor(name){
        if (new.target === Employee){
            throw new Error ("Cannot create Employee directly");
        }

        this.name = name;
    }
}

const employee = new Employee ("John");
```[cite: 7]