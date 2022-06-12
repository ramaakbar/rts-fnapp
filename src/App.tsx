import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostPage />} />
          <Route path='todo' element={<TodoPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
