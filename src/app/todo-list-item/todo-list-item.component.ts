import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('todo')
  currentTodo:Todo;

  @Output()
  todoToggle:EventEmitter<Todo>=new EventEmitter();

  @Output()
  todoRemove:EventEmitter<number>=new EventEmitter();

  toggleComplete(){
    this.todoToggle.emit(this.currentTodo);
  }
  deleteTodoById(){
    this.todoRemove.emit(this.currentTodo.id);
  }
}
