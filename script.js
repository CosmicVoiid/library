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

const button = document.querySelector("#add-button");
const modal = document.querySelector("#myModal");
const modal_overlay = document.querySelector("#modal-overlay");
const exit_button = document.querySelector("#exit-btn");

button.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");
});

exit_button.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");
});
