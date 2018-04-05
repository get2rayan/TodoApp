import { Component, Input, Output, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],  
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Input('currentTodo')
  currentTodo:Todo;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  todoToggler:EventEmitter<Todo>=new EventEmitter();

  @Output()
  todoRemover:EventEmitter<number>=new EventEmitter();

  toggleComplete(todo:Todo){
    this.todoToggler.emit(todo);
  }
  deleteTodoById(todoId:number)
  {
    this.todoRemover.emit(todoId);
  }

}
