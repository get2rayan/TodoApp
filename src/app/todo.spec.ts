import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('should accept input object to assign', ()=>{
    let values={ id: 1, title:'Test', complete: true};
    let todo=new Todo(values);
    expect(todo.title='Test').toBeTruthy();
    expect(todo.complete).toEqual(true);
  });
});
