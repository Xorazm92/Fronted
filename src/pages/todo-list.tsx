import { useState, useEffect } from 'react';
import { TodoService } from '../services/todo.service';
import { Todo } from '../types/todo.types';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    const todoList = TodoService.getTodos();
    setTodos(todoList);
  };

  const handleStatusToggle = (todo: Todo) => {
    TodoService.updateTodo(todo.id, {
      status: todo.status === 'completed' ? 'pending' : 'completed'
    });
    loadTodos();
  };

  const handleDelete = (id: string) => {
    TodoService.deleteTodo(id);
    loadTodos();
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo) {
      TodoService.updateTodo(editingTodo.id, editingTodo);
      setEditingTodo(null);
      loadTodos();
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <div className="space-y-4">
        {todos.map(todo => (
          <div key={todo.id} className="bg-white p-4 rounded-lg shadow">
            {editingTodo?.id === todo.id ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  value={editingTodo.title}
                  onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <textarea
                  value={editingTodo.description}
                  onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingTodo(null)}
                    className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-semibold ${todo.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                    {todo.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStatusToggle(todo)}
                      className={`px-3 py-1 rounded-md ${
                        todo.status === 'completed' 
                          ? 'bg-yellow-600 hover:bg-yellow-700' 
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white`}
                    >
                      {todo.status === 'completed' ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      onClick={() => handleEdit(todo)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{todo.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Created: {new Date(todo.createdAt).toLocaleDateString()}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 