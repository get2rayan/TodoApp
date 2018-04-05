import { Component, Input, Output, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoDataService } from './services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  title = 'app';
  
  constructor(private todoDataService:TodoDataService){    
  }

  ngOnInit(){
    //this.todoDataService=new TodoDataService();
  }
  
  //@Output()
  get todos() {
    return this.todoDataService.todos;
  }

  onAddTodo(todo:Todo){
    this.todoDataService.addTodo(todo);
    //this.todoDataService.addTodo(this.newTodo);
    //this.newTodo=new Todo();
  }

  toggleTodoComplete(todo:Todo){
    return this.todoDataService.toggleTodoComplete(todo);
  }

  deleteTodoById(id:number){
    return this.todoDataService.deleteTodoById(id);
  }
}
