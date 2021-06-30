//constants
const grid_container = document.querySelector("#grid-container");
const button = document.querySelector("#add-button");
const modal = document.querySelector("#myModal");
const modal_overlay = document.querySelector("#modal-overlay");
const exit_button = document.querySelector("#exit-btn");
const form = document.querySelector("#form");

const title_input = document.querySelector("#title");
const author_input = document.querySelector("#author");
const pages_input = document.querySelector("#pages");
const read_input = document.querySelector("#read-checkbox");

let myLibraries = [];

class book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
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

let n = 0;

function createBookCards() {
	let rows = giveRows(myLibraries);
	console.log(rows);
	let height = rows * 200;
	grid_container.style.cssText = `height: ${height}px;`;
	grid_container.style.setProperty("--rows", rows);

	const grid = document.createElement("div");
	const book_title = document.createElement("div");
	const book_author = document.createElement("div");
	const book_pages = document.createElement("div");

	const book_read_label = document.createElement("label");
	const book_read_input = document.createElement("input");
	const book_slider = document.createElement("span");
	const book_read_text = document.createElement("div");

	const book_exit = document.createElement("button");
	const book_exit_icon = document.createElement("span");

	book_exit_icon.setAttribute("class", "material-icons-outlined");
	book_exit_icon.textContent = "close";
	book_exit_icon.style =
		"font-size: 18px; position: relative; top: 2px; font-weight: bold;";
	book_exit.classList.add("exit-btns");
	book_exit.appendChild(book_exit_icon);

	book_read_input.setAttribute("type", "checkbox");
	book_read_label.classList.add("switch");
	book_slider.classList.add("slider", "round");
	book_read_text.textContent = "Read? ";
	book_read_text.style.cssText =
		"position: relative; right: 80px; top: 3px; font-size: 18px; font-weight: bold;";

	if (myLibraries[n].read === "read") {
		book_read_input.checked = true;
	}

	book_read_label.appendChild(book_read_text);
	book_read_label.appendChild(book_read_input);
	book_read_label.appendChild(book_slider);

	book_title.textContent = `"${myLibraries[n].title}"`;
	book_author.textContent = `by ${myLibraries[n].author}`;
	book_pages.textContent = `${myLibraries[n].pages} pages`;

	grid.classList.add("book");
	grid.setAttribute("id", `${n}`);
	book_title.classList.add("book-contents");
	book_author.classList.add("book-contents");
	book_pages.classList.add("book-contents");

	grid.appendChild(book_title);
	grid.appendChild(book_author);
	grid.appendChild(book_pages);
	grid.appendChild(book_read_label);
	grid.appendChild(book_exit);
	grid_container.appendChild(grid);

	book_exit.addEventListener("click", () => {
		grid_container.removeChild(grid);
	});

	n++;
}

function giveRows(lib) {
	if (lib.length % 3 !== 0) return Math.floor(lib.length / 3) + 1;
	else return lib.length / 3;
}

//DOM Editors

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

	const newBook = new book(
		title_input.value,
		author_input.value,
		pages_input.value,
		read(read_input)
	);
	addBooktoLibrary(newBook);
	displayBooks();
	createBookCards();
});
