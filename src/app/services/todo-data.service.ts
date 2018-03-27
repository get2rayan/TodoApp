import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoDataService {
//Todos
 todos: Todo[]=[];
 lastId: number=0;

  constructor() { }

  //Simulate add todo 
  addTodo(todo:Todo):TodoDataService{
    if(!todo.id){
      todo.id=++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  
  //Simulate delete todo
  deleteTodoById(id: number):TodoDataService{
    this.todos.splice(this.todos.findIndex(item=>item.id==id));    
    return this;
  }  

  //Simulate update
  updateTodoById(id:number, values:Object={}):Todo{
    var updateItem = this.getTodoById(id);
    if(!updateItem)
      return null;
    Object.assign(updateItem, values);
    return updateItem;
  }

  getTodoById(id:number):Todo{
    return this.todos.find(item=>item.id==id);
    //return this.todos.filter(item=>item.id===id).pop();
  }

  //toggle TodoComplete  
  toggleTodoComplete(todo:Todo):Todo{
    let statusTodo=this.updateTodoById(todo.id, {complete:!todo.complete});
    return statusTodo;
  }
}
