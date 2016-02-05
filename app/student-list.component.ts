import {Component, ViewEncapsulation} from 'angular2/core';

interface studentListItem {
    id:number;
    name:string;
}
//click event
//two way binding
// public methods
// private methods

@Component({

    selector:"student-list",
    template:`

    <div class="student-list">
        <div>Student List</div>
        <ul *ngIf="isAdd">
            <li *ngFor="#student of studentListItems" (click)="onItemClicked(student)">
                <span>{{student.id }})</span>
                <span>{{student.name | uppercase}}</span>
            </li>
        </ul>

    <input type="text"  #inputStudentName>
    <button (click)="onAddItem(inputStudentName)">Add Item</button>

    <input type="text"  [(ngModel)]="selectedStudent.name">
    <button (click)="onRemoveItem()">Remove Item</button>

    <div class="addRemoveList">
        <button (click)="isAdd=!isAdd" [disabled]="isAdd">Add List</button>
        <button (click)="isAdd=!isAdd" [disabled]="!isAdd">Remove List</button>
    </div>
        </div>

    `,
    styleUrls: ['css/student-list.css'],

})

//adding a public property
export class StudentListComponent{

    //by default all the properties are public
    public studentListItems : studentListItem[] = [
        {id:1,name:"john"},
        {id:2,name:"jane"},
        {id:3,name:"peter"}
    ];



    public isAdd = true;

    public selectedStudent:studentListItem = {id:0,name:""};

    public onItemClicked(student:studentListItem){

        this.selectedStudent = student;
    }

    public onAddItem(student:studentListItem){
        this.studentListItems.push({id:this.getID(),name:student.value});
    }

    public onRemoveItem(){
        this.studentListItems.splice(this.studentListItems.indexOf(this.selectedStudent),1);
    }

    private getID(){

        Array.prototype.pluck = function(key){
            return this.map(function(object){return object[key];})
        };

        if (this.studentListItems.length > 0) {
            return Math.max.apply(Math, this.studentListItems.pluck('id')) + 1;
        }else {
            return 1;
        }
    }






}