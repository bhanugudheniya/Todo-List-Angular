import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title: string;
  desc: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo ={
      sno: 4,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
