import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className='bg-white h-screen dark:bg-black'>
      <Navbar />
      <TodoPage />
    </div>
  );
}

export default App;
