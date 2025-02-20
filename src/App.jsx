import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout/mainLayout'
import { Home } from './pages/home/home';
import { NotFound } from './pages/NotFound/notFound';
import { BookList } from './pages/bookList/bookList';
import { BookDetail } from './pages/bookDetail/bookDetail';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="books/:id" element={<BookDetail />} />
        {/* <Route path="books" element={<BookList />} >
          <Route index element={<BookList />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >
  )

}

export default App;