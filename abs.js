// callback 
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