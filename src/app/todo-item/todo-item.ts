import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  @Input() item: { text: string, completed: boolean } = { text: '', completed: false };
  @Output() delete = new EventEmitter<void>(); 
  @Output() complete = new EventEmitter<void>();
}
