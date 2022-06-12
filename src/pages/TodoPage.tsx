import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import useTodos from '../hooks/useTodos';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function TodoPage() {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const { todos, addTodo, removeTodo } = useTodos();

  const [inputTodo, setInputTodo] = useState('');
  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTodo.length !== 0) {
      addTodo(inputTodo);
      setInputTodo('');
    }
  };

  return (
    <div className='mx-auto mt-8 mb-4 max-w-3xl px-4'>
      <h2 className='text-4xl font-extrabold'>To do </h2>

      <form
        action=''
        className='mt-5 flex w-full justify-between gap-3'
        onSubmit={submitTodo}
      >
        <input
          type='text'
          className='w-11/12 rounded-lg   bg-gray-50 px-4 py-2 transition-all duration-500  focus:ring-blue-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
          value={inputTodo}
          placeholder='Add Todo'
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className='rounded-md bg-blue-600 px-4 py-2 text-white transition-all duration-500 hover:bg-blue-700'>
          Submit
        </button>
      </form>

      <div className='mt-5 flex flex-col gap-4 ' ref={animationParent}>
        {todos.map((todo) => {
          return (
            <div
              className='flex items-center justify-between rounded-md border bg-gray-50 p-5 transition-all duration-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
              key={todo.id}
            >
              {todo.text}
              <div
                className='p-2 transition-all duration-300 hover:rounded-full hover:bg-slate-100 dark:hover:bg-zinc-700 '
                onClick={() => removeTodo(todo.id)}
              >
                <FaTimes className=' text-lg text-red-500 ' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
