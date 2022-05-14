import { Component, OnInit } from '@angular/core';
import { TodoState } from '../../states/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoActions } from '../../actions/todo.action';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos: Observable<any[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new TodoActions.Get());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoActions.Delete(id));
  }

  editTodo(payload: Todo) {
    console.log(payload);
    this.store.dispatch(new TodoActions.SetSelected(payload));
  }

}
