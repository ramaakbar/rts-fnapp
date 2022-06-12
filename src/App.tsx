import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import BtnScrollToTop from './components/BtnScrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostPage />} />
          <Route path='todo' element={<TodoPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>

        {showButton && <BtnScrollToTop />}
      </BrowserRouter>
    </>
  );
}

export default App;
