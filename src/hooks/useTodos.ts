import create from 'zustand';

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const initialTodo: Todo[] = [
  { id: 0, text: 'Tes halo', isDone: false },
  { id: 1, text: 'hello world 2', isDone: false },
];

const useTodos = create<{
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (removeId: number) => void;
}>((set) => ({
  todos: initialTodo,
  addTodo: (text: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length,
          text,
          isDone: false,
        },
      ],
    })),
  removeTodo: (removeId: number) =>
    set((state) => ({
      todos: state.todos.filter(({ id }) => id !== removeId),
    })),
}));

export default useTodos;
