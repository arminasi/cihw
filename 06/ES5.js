function Library() {
	this.books = []; //Array of LibraryBook
	this.readers = []; //Array of Readers
}

Library.prototype.doHaveBook = function(requestedBook) {
	const {title, author} = requestedBook;
	return this.books.some(book => {
		if(book.title === title && book.author === author) {
			return true;
		}
	})
}

Library.prototype.addBook = function(newBook) {
	const {author, title} = newBook;
	const libBook = new LibraryBook(title, author, Math.round(Math.random() * 1000), 1)
	let flag = false;
	if(this.doHaveBook(newBook)) {
		this.books.forEach(book => {
			if(book.title === libBook.title && book.author === libBook.author) {
				book.increaseQuantityBy(1)
			}
		})
	} else {
		if(libBook instanceof LibraryBook) {
			if(this.doHaveBook(libBook)) {
				flag = true;
			}
			if(!flag) {
				this.books.push(libBook);
			}
		}
	}
}

Library.prototype.addBooks = function() {
	for(let i = 0; i < arguments.length; i++) {
		this.addBook(arguments[i]);
	}
}

Library.prototype.checkReaderId = function(readerId) {
	return this.readers.some(item => {
		if(readerId === item.readerId) {
			return true;
		}
	})
}

Library.prototype.lendBook = function(book) {
	const {title, author} = book;
	if(this.doHaveBook(book)) {
		const readerBook = new ReaderBook(title, author, Math.round(Math.random() * 1000), "exp date", false)
		this.readers.push(readerBook)
		return readerBook
	}
}

function Reader(firstName, lastName, readerId) {
	if(typeof firstName === "string" && typeof lastName === "string" && typeof readerId) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.readerId = readerId;
		this.books = []; //Array of ReaderBook;
	} else {
		console.log("Reader constructor was failed")
	}
}

Reader.prototype.toString = function() {
	return `${this.firstName} ${this.lastName} ${this.readerId}`
}

Reader.prototype.borrowBook = function(book, library) {
	const {title, author} = book;
	const newBook = new ReaderBook(title, author, Math.round(Math.random() * 1000), "exp date", false)
	if(library.doHaveBook(book)) {
		if(book !== null && newBook instanceof ReaderBook) {
			this.books.push(newBook);
		}
	}
}

function Book(title, author) {
	if((typeof title === "string" && typeof author === "string")) {
		this.title = title;
		this.author = author;
	} else {
		console.log("Book constructor was failed")
	}
}

Book.prototype.isTheSameBook = function(book) {
	if(book.author === this.author && book.title === this.title) {
		return true;
	} else {
		return false;
	}
}

Book.prototype.toString = function() {
	return `${this.author} ${this.title}`
}

function LibraryBookBase(title, author, bookId) {
	Book.call(this, title, author, bookId)
	if((typeof bookId === "number")) {
		this.bookId = bookId;
	} else {
		console.log("LibraryBookBase constructor was failed")
	}
}
Object.setPrototypeOf(Book.prototype, LibraryBookBase.prototype)

LibraryBookBase.prototype.toString = function() {
	return `${this.author} ${this.title} ${this.bookId}`
}

function LibraryBook(title, author, bookId, quantity) {
	Book.call(this, title, author, bookId, quantity)
	if(typeof quantity === "number") {
		this.quantity = quantity;
	} else {
		console.log("LibraryBook constructor was failed")
	}
}
Object.setPrototypeOf(Book.prototype, LibraryBook.prototype)

LibraryBook.prototype.toString = function() {
	return `${this.author} ${this.title} ${this.bookId} ${this.quantity}`
}

LibraryBook.prototype.increaseQuantityBy = function(amount) {
	this.quantity += amount;
}

LibraryBook.prototype.decreaseQuantityBy = function(amount) {
	if(this.quantity >= amount) {
		this.quantity -= amount;
	}
}

function ReaderBook(title, author, bookId, expirationDate, isReturned) {
	Book.call(this, title, author, bookId, expirationDate, isReturned)
	if((typeof expirationDate === "string" && typeof isReturned === "boolean")) {
		this.expirationDate = expirationDate;
		this.isReturned = isReturned;
	} else {
		console.log("ReaderBook constructor was failed")
	}
}
Object.setPrototypeOf(Book.prototype, ReaderBook.prototype)

ReaderBook.prototype.toString = function () {
	return `${this.author} ${this.title} ${this.bookId} ${this.expirationDate} ${this.isReturned}`
}

const me = new Reader("Arman", "Minasyan", 88)
const Lib = new Library()

const item = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling")
const item1 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling")
const item2 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling")

Lib.addBook(item1);
Lib.addBook(item2);
Lib.addBook(item2);
Lib.addBook(item2);
me.borrowBook(item2, Lib);
Lib.lendBook(item1, 100)
console.log(Lib)
console.log(me)
