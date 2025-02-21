import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import { TodoList } from './pages/todo-list';
import { CreateTask } from './pages/create-task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TodoList />} />
          <Route path="create-task" element={<CreateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 