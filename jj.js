// learning OOP by Maria Cruz
// Pages: 120
// python basics by John Davis
// Pages: 150

class Publication {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `Learning ${this.title} by ${this.author}`;
  }
}

class Book extends Publication {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  getDetails() {
    return `${super.getDetails()}\nPages: ${this.pages}`;
  }
}

const book1 = new Book("learning OOP", "Maria Cruz", 120);
const book2 = new Book("python basics", "John Davis", 150);

console.log(book1.getDetails());
console.log(book2.getDetails());