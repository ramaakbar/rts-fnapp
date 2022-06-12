import { useEffect } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { TbMoon } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [theme]);

  return (
    <div className='sticky top-0 z-10 border-b bg-white/30 px-4 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/30'>
      <nav className='mx-auto flex w-full max-w-4xl items-center justify-between py-2'>
        <div className='ml-[-0.60rem] '>
          <Link
            to={'/'}
            className={` rounded-lg px-3 py-2 ${
              pathMatchRoute('/') ? 'font-extrabold' : ''
            } transition-all duration-500 hover:bg-gray-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100`}
          >
            {' '}
            Post
          </Link>
          <Link
            to={'todo'}
            className={`rounded-lg px-3 py-2 ${
              pathMatchRoute('/todo') ? 'font-extrabold' : ''
            } transition-all duration-500 hover:bg-gray-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100`}
          >
            Todo
          </Link>
          <Link
            to={'about'}
            className={`rounded-lg px-3 py-2 ${
              pathMatchRoute('/about') ? 'font-extrabold' : ''
            }  transition-all duration-500 hover:bg-gray-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100`}
          >
            About
          </Link>
        </div>
        <button
          className='flex items-center rounded-lg  bg-gray-100 py-2 px-3 transition-all duration-700 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-zinc-700'
          onClick={() => setTheme()}
        >
          {theme === 'dark' ? <TbMoon /> : <MdOutlineWbSunny />}
        </button>
      </nav>
    </div>
  );
}
