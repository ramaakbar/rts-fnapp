import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostPage />} />
          <Route path='todo' element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
