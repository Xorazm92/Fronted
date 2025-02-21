import { Todo } from '../types/todo.types';

export class TodoService {
  private static STORAGE_KEY = 'todos';

  static getTodos(): Todo[] {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  static addTodo(todo: Omit<Todo, 'id' | 'createdAt'>): Todo {
    const todos = this.getTodos();
    const newTodo: Todo = {
      ...todo,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    
    todos.push(newTodo);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    return newTodo;
  }

  static updateTodo(id: string, updates: Partial<Todo>): Todo | null {
    const todos = this.getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) return null;
    
    todos[todoIndex] = { ...todos[todoIndex], ...updates };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    return todos[todoIndex];
  }

  static deleteTodo(id: string): boolean {
    const todos = this.getTodos();
    const filteredTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredTodos));
    return filteredTodos.length < todos.length;
  }
} 