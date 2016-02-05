var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
//click event
//two way binding
// public methods
// private methods
var StudentListComponent = (function () {
    function StudentListComponent() {
        //by default all the properties are public
        this.studentListItems = [
            { id: 1, name: "john" },
            { id: 2, name: "jane" },
            { id: 3, name: "peter" }
        ];
        this.isAdd = true;
        this.selectedStudent = { id: 0, name: "" };
    }
    StudentListComponent.prototype.onItemClicked = function (student) {
        this.selectedStudent = student;
    };
    StudentListComponent.prototype.onAddItem = function (student) {
        this.studentListItems.push({ id: this.getID(), name: student.value });
    };
    StudentListComponent.prototype.onRemoveItem = function () {
        this.studentListItems.splice(this.studentListItems.indexOf(this.selectedStudent), 1);
    };
    StudentListComponent.prototype.getID = function () {
        Array.prototype.pluck = function (key) {
            return this.map(function (object) { return object[key]; });
        };
        if (this.studentListItems.length > 0) {
            return Math.max.apply(Math, this.studentListItems.pluck('id')) + 1;
        }
        else {
            return 1;
        }
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: "student-list",
            template: "\n\n    <div class=\"student-list\">\n        <div>Student List</div>\n        <ul *ngIf=\"isAdd\">\n            <li *ngFor=\"#student of studentListItems\" (click)=\"onItemClicked(student)\">\n                <span>{{student.id }})</span>\n                <span>{{student.name | uppercase}}</span>\n            </li>\n        </ul>\n\n    <input type=\"text\"  #inputStudentName>\n    <button (click)=\"onAddItem(inputStudentName)\">Add Item</button>\n\n    <input type=\"text\"  [(ngModel)]=\"selectedStudent.name\">\n    <button (click)=\"onRemoveItem()\">Remove Item</button>\n\n    <div class=\"addRemoveList\">\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"isAdd\">Add List</button>\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"!isAdd\">Remove List</button>\n    </div>\n        </div>\n\n    ",
            styleUrls: ['css/student-list.css']
        })
    ], StudentListComponent);
    return StudentListComponent;
})();
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map