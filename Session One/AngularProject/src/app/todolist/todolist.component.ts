import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class ToDoListComponent {
  title = 'todolist';
  todo = '';
  todos = ["lets go", "Todo 2"];

  addToDo(todo){
    this.todos.push(this.todo);
  }
}