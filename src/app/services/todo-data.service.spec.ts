import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from '../todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });
  var values={id:1, title: 'new todo', complete:false};
  var newTodo=new Todo(values);  

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();    
  }));
  it('should return empty array by default', inject([TodoDataService], (service:TodoDataService)=>{
    expect(service.todos).toEqual([]);
  }));
  it('should add new todo to list', inject([TodoDataService],(service: TodoDataService)=>{    
    let todo2 = new Todo({id:2,title:'todo2'});
    expect(service.addTodo(newTodo)).toBeTruthy();
    expect(service.todos.length).toEqual(1);
    expect(service.todos).toEqual([newTodo]);
    expect(service.addTodo(todo2)).toBeTruthy();
    expect(service.getTodoById(1)).toEqual(newTodo);        
    expect(service.getTodoById(2)).toEqual(todo2);        
  }));
  it('should delete todo by id', inject([TodoDataService],(service: TodoDataService)=>{    
    expect(service.addTodo(newTodo)).toBeTruthy();
    //expect(service.todos.length).toEqual(1);
    expect(service.deleteTodoById(1)).toBeTruthy();
    expect(service.todos.length).toEqual(0);
  }));
  it('should update todo by id', inject([TodoDataService], (service, TodoDataService)=>{
    service.addTodo(newTodo);
    let toUpdateTodo=service.getTodoById(1);
    expect(toUpdateTodo.title).toEqual('new todo');
    toUpdateTodo=service.updateTodoById(1, {title:'new title'});    
    expect(toUpdateTodo.title).toEqual('new title');
    toUpdateTodo=service.updateTodoById(2, {title:'2title'});    
    expect(toUpdateTodo).toEqual(null);
  }));
});
