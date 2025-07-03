import { Component } from '@angular/core';
import { TodoService, Todo } from './todo.service';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItem],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'angular-todo-app';

  // Use the Todo type for strong typing
  todoItems: Todo[];

  filter: 'all' | 'active' | 'completed' = 'all';

  // Inject the TodoService via the constructor
  constructor(private todoService: TodoService) {
    // Initialize todoItems from the service
    this.todoItems = this.todoService.getTodos();
  }

  get filteredItems() {
    if (this.filter === 'all') {
      return this.todoItems;
    }
    return this.todoItems.filter(item => this.filter === 'completed' ? item.completed : !item.completed);
  }
  
  addItem(text: string) {
    if (text.trim() === '') {
      return;
    }
    this.todoItems.push({ text: text, completed: false });
    this.saveTodoItems(); 
    this.filter = 'all'; 
  }

  deleteItem(itemToDelete: Todo) {
    this.todoItems = this.todoItems.filter(item => item !== itemToDelete);
    this.saveTodoItems(); 
  }

  toggleComplete(itemToToggle: Todo) {
    itemToToggle.completed = !itemToToggle.completed;
    this.saveTodoItems();
  }

  updateItem(itemToUpdate: Todo, newText: string) {
    itemToUpdate.text = newText;
    this.saveTodoItems(); 
  }

  // Use the service to save todos
  private saveTodoItems() {
    this.todoService.saveTodos(this.todoItems);
  }
}
