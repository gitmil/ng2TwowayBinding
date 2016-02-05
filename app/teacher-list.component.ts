import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
    selector:"teacher-list",
    template:`
        <div class='teacher-list'>
            <div >Teacher list</div>
            <div [style.color]="color"> Pending....</div>
        </div>

    `,
    styleUrls: ['css/teacher-list.css'],
    encapsulation: ViewEncapsulation.Emulated

})
export class TeacherListComponent{
    public color = 'red';


}
