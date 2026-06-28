import { createContext, useContext, useEffect, useState } from 'react';

const Ctx = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('rk-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rk-theme', theme);
  }, [theme]);

  return (
    <Ctx.Provider value={{ theme, isDark: theme==='dark', toggle: () => setTheme(t => t==='dark'?'light':'dark') }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
