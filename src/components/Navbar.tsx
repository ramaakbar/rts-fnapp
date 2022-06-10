import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='border-b px-4 '>
      <nav className='mx-auto flex w-full max-w-4xl items-center justify-between py-2'>
        <div className='ml-[-0.60rem] '>
          <a
            href=''
            className='rounded-lg px-3 py-2 font-semibold hover:bg-gray-200'
          >
            Todo
          </a>
          <a
            href=''
            className='rounded-lg px-3 py-2 font-normal hover:bg-gray-200'
          >
            About
          </a>
        </div>
        <button className='flex items-center rounded-lg bg-gray-200 py-2 px-3'>
          <FaMoon />
          <FaSun />
        </button>
      </nav>
    </div>
  );
}
