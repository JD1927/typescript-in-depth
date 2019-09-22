/**
 * ===============================================================
 *                      TYPESCRIPT IN DEPTH
 * ===============================================================
 */
class HelloWord {
  constructor(public message?: string) { }
}

const hello: HelloWord = new HelloWord('Hello Typescript');
console.log(hello.message);

/**
 * ===============================================================
 *                      VAR VS LET && CONST
 * ===============================================================
 */
function scopeTest() {
  if (true) {
    var foo = 'user anywhere';
    let bar = 'use in this block';

    // more stuff
  }

  console.log(foo); // Success
  // console.log(bar); // Error

}

/**
 * ===============================================================
 *                      TYPE INFERENCE
 * ===============================================================
 */

let myString1 = 'This is a string';

// myString1 = 42 // [ERROR]: Type '42' is not assignable to type 'string'

function ReturnNumber1() { // Typescript infere that this function return a number
  return 42;
}

let anotherString1 = 'this is also a string';

// anotherString1 = ReturnNumber(); // [ERROR]: Type 'number' is not assignable to type 'string'.

/**
 * ===============================================================
 *                      TYPE ANNOTATIONS
 * ===============================================================
 */

let myString2: string = 'This is a string';

// myString2 = 42 // [ERROR]: Type '42' is not assignable to type 'string'

function ReturnNumber2(): number { // Typescript infere that this function return a number
  return 42;
}

let anotherString2: string = 'this is also a string';

// anotherString2 = ReturnNumber2(); // [ERROR]: Type 'number' is not assignable to type 'string'.

/**
 * ===============================================================
 *                      ENUMS
 * ===============================================================
 */

//enum category { Biography, Poetry, Fiction }; // 0, 1, 2

//enum category { Biography = 1, Poetry, Fiction }; // 1, 2, 3

enum category { Biography = 5, Poetry = 8, Fiction = 9 }; // 5, 8, 9

// GETTING NUMBER VALUE
let favoriteCategory: category = category.Biography;
console.log(`Favorite category:`,favoriteCategory);

// GETTING VALUE
let categoryString = category[favoriteCategory];
console.log(categoryString);

/**
 * ===============================================================
 *                       ARRAYS
 * ===============================================================
 */

let strArray1: string[] = ['here', 'are', 'strings'];

let strArray2: Array<string> = ['here', 'are', 'strings']; // Generic way

/**
 * ===============================================================
 *                       TUPLES
 * ===============================================================
 */

let tuple1: [number, string] = [25, 'truck'];

let tuple2: Array<string> = ['here', 'are', 'strings']; // Generic way
