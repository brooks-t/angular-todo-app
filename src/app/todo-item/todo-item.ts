import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  @Input() item: { text: string, completed: boolean } = { text: '', completed: false };
  @Output() delete = new EventEmitter<void>(); 
  @Output() complete = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();
  
  isEditing = false;
  editedText = '';

  startEdit() {
    this.isEditing = true;
    this.editedText = this.item.text;
  }

  saveEdit() {
    if (this.editedText.trim() === '') {
      return;
    }
    this.update.emit(this.editedText);
    this.isEditing = false;
  }
}
