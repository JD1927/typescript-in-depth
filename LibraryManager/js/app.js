"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
/**
 * Retorna todos los libros
 */
function getAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why The Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
/**
 * Muestra la cantidad total de libros
 * Muestra cuál libro está disponible según la propiedad 'available'
 * @param { Book[] } books Lista de todos los libros obtenidos
 */
function logFirtAvailable(books) {
    if (books === void 0) { books = getAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}
/**
 * Obtiene todos los títulos de los libros según la categoría ingresada
 * @param {Category} categoryFilter Value of the category
 */
function getBooksTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
/**
 * Recorreo y muestra por consola un arreglo de títulos de libros
 * @param { string[] } titles Lista de títulos de libros
 */
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function getBookByID(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function createCustomerID(name, id) {
    return "" + name + id;
}
function createCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function checkoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function getTitles(bookProperty) {
    var allBooks = getAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
//*******************************************************************
var Newspaper = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper('The New York Times', 2019);
myPaper.printCitation();
/* let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
refBook.printCitation(); */
/* let ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2016);
ref.title = 'Facts and Figures';

ref.publisher = 'Random Publisher';
console.log(ref.publisher); */
/*
let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda');
 */
/* let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
}

let logDamage: DamageLogger;

logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
logDamage('Coffee stains');
 */
/* printBook(myBook);
myBook.markDamaged('Missing back cover'); */
/* let checkedOutBooks = getTitles(false);
checkedOutBooks.forEach(title => console.log(title));
 */
/* let myBooks: string[] = checkoutBooks('Thorne', 1, 2, 3);
myBooks.forEach(title => console.log(title));
 */
// logFirtAvailable();
/* let fictionBooks = getBooksTitlesByCategory();
fictionBooks.forEach(title => console.log(title)); */
/* createCustomer('Juan');
createCustomer('Juan', 8);
createCustomer('Juan', 8, 'Medellin'); */
/* let x: number;
x = 5;

let idGenerator: (chars: string, nums: number) => string;

idGenerator = createCustomerID;

let myID: string = idGenerator('Juan', 10);
console.log(myID); */
// const fictionBooks = getBooksTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));
//# sourceMappingURL=app.js.map