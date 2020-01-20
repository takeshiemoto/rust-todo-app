import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from './todo.actions';
import { ITodo } from '../models/todo';

export class TodoStateModel {
  public todoList: ITodo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todoList: [
      { name: '買い物', completed: false },
      { name: '区役所に行く', completed: false }
    ]
  }
})
export class TodoState {
  @Selector()
  static todoList(state: TodoStateModel) {
    return state.todoList;
  }

  @Action(Todo.Add)
  add(ctx: StateContext<TodoStateModel>, action: Todo.Add) {
    const state = ctx.getState();
    ctx.setState({
      todoList: [...state.todoList, { name: action.todo, completed: false }]
    });
  }
}
