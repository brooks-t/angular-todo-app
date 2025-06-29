import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  imports: [TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-todo-app';

  todoItems = ['Learn Angular', 'Build a Todo App', 'Deploy the app']; 
}
