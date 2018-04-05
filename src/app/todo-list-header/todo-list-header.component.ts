import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo:Todo;

  constructor() { 
    this.newTodo=new Todo();
  }

  ngOnInit() {
  }

  @Output()
  add:EventEmitter<Todo>=new EventEmitter();

  addTodo(){
    this.add.emit(this.newTodo);
    this.newTodo=new Todo();
  }
}
