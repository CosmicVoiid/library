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
	if (check.checked) return "read";
	else return "not read";
}

const grid_container = document.querySelector("#grid-container");
function createGrid() {
	let rows = giveRows(myLibraries);
	console.log(rows);
	let height = rows * 200;
	grid_container.style.cssText = `height: ${height}px;`;
	grid_container.style.setProperty("--rows", rows);
	for (let i = 0; i < myLibraries.length; i++) {
		const grid = document.createElement("div");
		grid.textContent = `Title: ${myLibraries[i].title}`;
		grid.classList.add("book");
		grid_container.appendChild(grid);
	}
}

function giveRows(lib) {
	if (lib.length % 3 !== 0) return Math.floor(lib.length / 3) + 1;
	else return lib.length / 3;
}

const theHobbit = new book("The Hobbit", "JRR Tolkien", 295, "not read");
const dune = new book("Dune", "Spaceman", 400, "not read");
const wallace = new book("Wallace and Gromit", "Clay", 50, "read");

addBooktoLibrary(theHobbit);
addBooktoLibrary(dune);
addBooktoLibrary(wallace);

//HTML Editors
const button = document.querySelector("#add-button");
const modal = document.querySelector("#myModal");
const modal_overlay = document.querySelector("#modal-overlay");
const exit_button = document.querySelector("#exit-btn");
const form = document.querySelector("#form");

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

form.addEventListener("submit", (e) => {
	e.preventDefault();
	modal.classList.toggle("closed");
	modal_overlay.classList.toggle("closed");

	let newTitle = title_input.value;
	newTitle = new book(
		title_input.value,
		author_input.value,
		pages_input.value,
		read(read_input)
	);

	addBooktoLibrary(newTitle);
	displayBooks();
	createGrid();
});
