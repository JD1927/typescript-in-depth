import { Book, DamageLogger, Person, Author, Librarian } from './interfaces';
import { Category } from './enums';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';
/**
 * Retorna todos los libros
 */
function getAllBooks(): Book[] {
  let books: Book[] = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'I Know Why The Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ];

  return books;
}
/**
 * Muestra la cantidad total de libros
 * Muestra cuál libro está disponible según la propiedad 'available'
 * @param { Book[] } books Lista de todos los libros obtenidos
 */
function logFirtAvailable(books: Book[] = getAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (let currentBook of books) {

    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`);

}
/**
 * Obtiene todos los títulos de los libros según la categoría ingresada
 * @param {Category} categoryFilter Value of the category
 */
function getBooksTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
  console.log(`Getting books in category: ${Category[categoryFilter]}`);

  const allBooks = getAllBooks();
  const filteredTitles: string[] = [];

  for (let currentBook of allBooks) {
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
function logBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

function getBookByID(id: number): Book {
  const allBooks = getAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: number): void {
  console.log(`Creating customer ${name}`);

  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }

}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Checking out books for ${customer}`);

  const booksCheckedOut: string[] = [];

  for (let id of bookIDs) {
    let book = getBookByID(id);

    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }

  return booksCheckedOut;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];

function getTitles(bookProperty: string | boolean): string[] {
  const allBooks = getAllBooks();
  const foundTitles: string[] = [];

  if (typeof bookProperty == 'string') {
    // get all books by a particular author
    for (let book of allBooks) {
      if(book.author === bookProperty){
        foundTitles.push(book.title);
      }
    }
  }
  else if (typeof bookProperty == 'boolean') {
    // get all books on specified availability
    for (let book of allBooks) {
      if (book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }

  return foundTitles;
}

function printBook(book: Book) {
  console.log(`${book.title} by ${book.author}`);
}

//*******************************************************************

let Newspaper = class extends ReferenceItem {
  printCitation(): void {
    console.log(`Newspaper: ${this.title}`);
  }
}

const myPaper = new Newspaper('The New York Times', 2019);
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


