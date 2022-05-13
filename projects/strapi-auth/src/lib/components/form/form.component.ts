import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoActions } from '../../actions/todo.action';
import { TodoState } from '../../states/todo.state';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Select(TodoState.getSelectedTodo) selectedTodo: Observable<Todo>;
  todoForm: FormGroup;
  editTodo = false;
  todoId;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.selectedTodo
      .subscribe((todo: Todo) => {
        if (todo) {
          this.todoId = todo.id;
          this.todoForm.patchValue({
            id: todo.id,
            title: todo.name
          });
          this.editTodo = true;
        } else {
          this.editTodo = false;
        }
      });
  }

  createForm() {
    this.todoForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.editTodo) {
      this.store.dispatch(new TodoActions.Update(this.todoForm.value, this.todoId))
        .subscribe(() => {
          this.clearForm();
        });
    } else {
      this.store.dispatch(new TodoActions.Add(this.todoForm.value))
        .subscribe(() => {
          this.clearForm();
        });
    }
  }

  clearForm() {
    this.todoForm.reset();
    this.store.dispatch(new TodoActions.SetSelected(null));
  }
}
