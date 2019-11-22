import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'first todo',
        description: 'first todo is the best todo!',
        completed: false
      },
      {
        id: 2,
        title: ' todo 2',
        description: 'first todo is the best todo!',
        completed: false
      },
      {
        id: 3,
        title: 'todo 3',
        description: 'first todo is the best todo!',
        completed: false
      },
      {
        id: 4,
        title: 'todo 4',
        description: 'first todo is the best todo!',
        completed: false
      }
    ];
    console.log(this.todos);
  }
}
