"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
}
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
