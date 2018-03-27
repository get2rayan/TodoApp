import { Component, Input, Output, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoDataService } from './services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.css', '../assets/css/todomvc-app.css', '../assets/css/todomvc-common.css'],
  providers:[TodoDataService]
})
export class AppComponent implements OnInit{
  title = 'app';
  
  @Input()
  newTodo:Todo;

  constructor(private todoDataService:TodoDataService){    
    this.newTodo=new Todo();    
  }

  ngOnInit(){
    //this.todoDataService=new TodoDataService();
  }
  
  get todos() {
    return this.todoDataService.todos;
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo=new Todo();
  }

  toggleTodoComplete(todo:Todo){
    return this.todoDataService.toggleTodoComplete(todo);
  }

  deleteTodoById(id:number){
    return this.todoDataService.deleteTodoById(id);
  }
}
