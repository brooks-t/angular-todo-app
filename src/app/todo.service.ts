import { Injectable } from '@angular/core';

// Define a type for todo items for strong typing
export interface Todo {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root', // This makes the service available app-wide
})
export class TodoService {
  // Load todos from local storage or use defaults
  getTodos(): Todo[] {
    const data = localStorage.getItem('todoItems');
    if (data) {
      return JSON.parse(data);
    }
    return [
      { text: 'Learn Angular', completed: false },
      { text: 'Build a Todo App', completed: true },
      { text: 'Deploy the app', completed: false },
    ];
  }

  // Save todos to local storage
  saveTodos(todos: Todo[]): void {
    localStorage.setItem('todoItems', JSON.stringify(todos));
  }
}
