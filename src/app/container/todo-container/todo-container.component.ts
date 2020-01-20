import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../state/todo.state';
import { Observable } from 'rxjs';
import { ITodo } from '../../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../../state/todo.actions';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  @Select(TodoState.todoList) todoList$: Observable<ITodo[]>;

  model: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.model = fb.group({
      todo: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { todo } = this.model.value;
    this.store.dispatch(new Todo.Add(todo));
    this.model.reset();
  }
}
