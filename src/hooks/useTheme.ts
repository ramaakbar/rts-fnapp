import create from 'zustand';

type Theme = 'light' | 'dark';

const initialTheme: Theme = 'light';

const useTheme = create<{
  theme: Theme;
  setTheme: () => void;
}>((set) => ({
  theme: initialTheme,
  setTheme: () => {
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  },
}));

export default useTheme;
