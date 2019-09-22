"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.calculateLateFee = calculateLateFee;
function maxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.maxBooksAllowed = maxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
