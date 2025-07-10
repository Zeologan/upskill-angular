import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  task = '';
  tasks:string[] = [];

  addTask(){
    if(this.task){
      this.tasks.push(this.task);
      this.task = ""
    }
  }

  deleteTask(index:number){
    this.tasks.splice(index,1)
  }
}
