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

function read(check) {
	if (check === "off") return "read";
	else "not read";
}

const theHobbit = new book("The Hobbit", "JRR Tolkien", 295, "not read");
const dune = new book("Dune", "Spaceman", 400, "not read");
const wallace = new book("Wallace and Gromit", "Playdough", 50, "read");

addBooktoLibrary(theHobbit);
addBooktoLibrary(dune);
addBooktoLibrary(wallace);

//displayBooks();

const button = document.querySelector("#add-button");
const modal = document.querySelector("#myModal");
const modal_overlay = document.querySelector("#modal-overlay");
const exit_button = document.querySelector("#exit-btn");
const submit = document.querySelector("#submit-button");

const title_input = document.querySelector("#title");
const author_input = document.querySelector("#author");
const pages_input = document.querySelector("#pages");
const read_input = document.querySelector("#read-checkbox");

button.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");
});

exit_button.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");
});

submit.addEventListener("click", () => {
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");

	let newTitle = title_input.value;
	console.log(read_input.value);
	newTitle = new book(
		title_input.value,
		author_input.value,
		pages_input.value,
		read(read_input.value)
	);

	console.log(
		title_input.value,
		author_input.value,
		pages_input.value,
		read_input.value
	);

	addBooktoLibrary(newTitle);
	displayBooks();
});
