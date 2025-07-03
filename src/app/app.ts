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

  todoItems = this.loadTodoItems();

  filter: 'all' | 'active' | 'completed' = 'all';

  get filteredItems() {
    if (this.filter === 'all') {
      return this.todoItems;
    }
    return this.todoItems.filter((item: { text: string, completed: boolean }) => this.filter === 'completed' ? item.completed : !item.completed);
  }
  
  addItem(text: string) {
    if (text.trim() === '') {
      return;
    }
    this.todoItems.push({ text: text, completed: false });
    this.saveTodoItems(); 
    this.filter = 'all'; 
  }

  deleteItem(itemToDelete: { text: string, completed: boolean }) {
    this.todoItems = this.todoItems.filter((item: { text: string, completed: boolean }) => item !== itemToDelete);
    this.saveTodoItems(); 
  }

  toggleComplete(itemToToggle: { text: string, completed: boolean }) {
    itemToToggle.completed = !itemToToggle.completed;
    this.saveTodoItems();
  }

  updateItem(itemToUpdate: { text: string, completed: boolean }, newText: string) {
    itemToUpdate.text = newText;
    this.saveTodoItems(); 
  }

  
  private loadTodoItems() {
    const data = localStorage.getItem('todoItems');
    if (data) {
      return JSON.parse(data);
    }
    
    return [
      { text: 'Learn Angular', completed: false },
      { text: 'Build a Todo App', completed: true },
      { text: 'Deploy the app', completed: false }
    ];
  }
  
  private saveTodoItems() {
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }
}
