import {Component} from 'angular2/core';
import {StudentListComponent} from "./student-list.component";
import {TeacherListComponent} from "./teacher-list.component";

@Component({
    selector:'app',
    template:`
        <student-list></student-list>
        <teacher-list></teacher-list>
    `,
    directives:[StudentListComponent,TeacherListComponent]
})


export class AppComponent{

}
