class Book {
	constructor(title, author) {
		if((typeof title === "string" && typeof author === "string")) {
			this._title = title;
			this._author = author;
		} else {
			console.log("Book constructor was failed")
		}
	}

	get title() {
		return this._title;
	}

	get author() {
		return this._author;
	}

	toString() {
		return `${this.author} ${this.title}`
	}

	isTheSameBook(book) {
		if(book.author === this.author && book.title === this.title) {
			return true;
		} else {
			return false;
		}
	}
}

class LibraryBookBase extends Book{
	constructor(title, author, bookId) {
		super(title, author);
		if((typeof bookId === "number")) {
			this._bookId = bookId;
		} else {
			console.log("LibraryBookBase constructor was failed")
		}
	}

	get bookId() {
		return this._bookId;
	}

	toString() {
		return `${this.author} ${this.title} ${this.bookId}`
	}
}

class LibraryBook extends LibraryBookBase{
	constructor(title, author, bookId, quantity) {
		super(title, author, bookId);
		if(typeof quantity === "number") {
			this._quantity = quantity;
		} else {
			console.log("LibraryBook constructor was failed")
		}
	}

	get quantity() {
		return this._quantity;
	}

	set quantity(value) {
		this._quantity = value;
	}

	toString() {
		return `${this.author} ${this.title} ${this.bookId} ${this.quantity}`
	}

	increaseQuantityBy(amount) {
		this._quantity += amount;
	}

	decreaseQuantityBy(amount) {
		if(this._quantity >= amount) {
			this._quantity -= amount;
		}
	}
}

class ReaderBook extends LibraryBookBase {
	constructor(title, author, bookId, expirationDate, isReturned) {
		super(title, author, bookId);
		if((typeof expirationDate === "string" && typeof isReturned === "boolean")) {
			this._expirationDate = expirationDate;
			this._isReturned = isReturned;
		} else {
			console.log("ReaderBook constructor was failed")
		}
	}

	get expirationDate() {
		return this._expirationDate;
	}

	set expirationDate(value) {
		if(typeof value === "string") {
			this.expirationDate = value;
		}
	}

	get isReturned() {
		return this._isReturned;
	}

	set isReturned(value) {
		if(typeof value === "boolean") {
			this._isReturned = value;
		}
	}

	toString() {
		return `${this.author} ${this.title} ${this.bookId} ${this.expirationDate} ${this.isReturned}`
	}
}

class Reader {
	constructor(firstName, lastName, readerId) {
		if(typeof firstName === "string" && typeof lastName === "string" && typeof readerId) {
			this._firstName = firstName;
			this._lastName = lastName;
			this._readerId = readerId;
			this._books = []; //Array of ReaderBook;
		} else {
			console.log("Reader constructor was failed")
		}
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}

	get readerId() {
		return this._readerId;
	}

	get books() {
		return this._books;
	}

	set books(value) {
		if(value instanceof ReaderBook) {
			value = this._books;
		}
	}

	toString() {
		return `${this.firstName} ${this.lastName} ${this.readerId}`
	}

	borrowBook(book, library) {
		const {title, author} = book;
		const newBook = new ReaderBook(title, author, Math.round(Math.random() * 1000), "exp date", false)
		if(library.doHaveBook(book)) {
			if(book !== null && newBook instanceof ReaderBook) {
				this.books.push(newBook);
			}
		}
	}
}

class Library {
	constructor() {
			this._books = []; //Array of LibraryBook
			this._readers = []; //Array of Readers
	}
	get books() {
		return this._books;
	}

	get readers() {
		return this._readers;
	}

	doHaveBook(requestedBook) {
		const {title, author} = requestedBook;
		return this.books.some(book => {
			if(book.title === title && book.author === author) {
				return true;
			}
		})
	}

	addBook(newBook) {
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

	addBooks() {
		for(let i = 0; i < arguments.length; i++) {
			this.addBook(arguments[i]);
		}
	}

	checkReaderId(readerId) {
		return this.readers.some(item => {
			if(readerId === item.readerId) {
				return true;
			}
		})
	}

	lendBook(book, readerId) {
		const {title, author} = book;
		if(this.doHaveBook(book)) {
			const readerBook = new ReaderBook(title, author, Math.round(Math.random() * 1000), "exp date", false)
			this.readers.push(readerBook)
			return readerBook
		}
	}
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