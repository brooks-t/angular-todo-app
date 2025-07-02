import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-todo-app';

  todoItems = [
    { text: 'Learn Angular', completed: false },
    { text: 'Build a Todo App', completed: true },
    { text: 'Deploy the app', completed: false }
  ];
  
  addItem(text: string) {
    if (text.trim() === '') {
      return;
    }
    this.todoItems.push({ text: text, completed: false });
  }
  deleteItem(itemToDelete: { text: string, completed: boolean }) {
    this.todoItems = this.todoItems.filter(item => item !== itemToDelete);
  }
  toggleComplete(itemToToggle: { text: string, completed: boolean }) {
    itemToToggle.completed = !itemToToggle.completed;
  }
  updateItem(itemToUpdate: { text: string, completed: boolean }, newText: string) {
    itemToUpdate.text = newText;
  }
}
