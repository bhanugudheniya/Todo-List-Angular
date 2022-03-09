import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;  // using Input directive
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.todoDelete.emit(this.todo);
    console.log("triggerd");
  }

  onCheckbocClick(todo){
    this.todoCheckbox.emit(todo);
  }
}
