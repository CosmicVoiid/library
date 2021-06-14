let myLibraries = [];

function book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBooktoLibrary(book) {
	myLibraries.push(book);
}

function displayBooks() {
	for (let i = 0; i < myLibraries.length; i++) {
		console.table(myLibraries[i]);
	}
}

const theHobbit = new book("The Hobbit", "JRR Tolkien", 295, "not read");
const dune = new book("Dune", "Spaceman", 400, "not read");
const wallace = new book("Wallace and Gromit", "Playdough", 50, "read");

addBooktoLibrary(theHobbit);
addBooktoLibrary(dune);
addBooktoLibrary(wallace);

displayBooks();

const shelf = document.querySelector("#shelf");
const button = document.querySelector("button");
const form = document.querySelector("form");

button.addEventListener("click", () => {});
