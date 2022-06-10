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
    <div className='mx-auto mt-8 max-w-3xl px-4'>
      <h2 className='text-4xl'>TodoPage</h2>

      <form
        action=''
        className='mt-5 flex w-full justify-between gap-3'
        onSubmit={submitTodo}
      >
        <input
          type='text'
          className='w-11/12 rounded-lg border bg-gray-50 px-4 py-2'
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className='rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600'>
          Submit
        </button>
      </form>

      <div className='mt-5 flex flex-col gap-4 ' ref={animationParent}>
        {todos.map((todo) => {
          return (
            <div className='flex items-center justify-between rounded-md bg-gray-50 p-5'>
              {todo.text}
              <div
                className='p-2 hover:rounded-full hover:bg-slate-100 '
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
