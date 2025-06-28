import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  @Input() text: string = '';
}
