import { createContext, useContext, useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: (isDark: boolean) => Promise<void>;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: async () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const { value } = await Preferences.get({ key: 'darkMode' });
        if (value) {
          setDarkMode(value === 'true');
          document.body.classList.toggle('dark', value === 'true');
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };
    loadSettings();
  }, []);

  const toggleDarkMode = async (isDark: boolean) => {
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
    await Preferences.set({
      key: 'darkMode',
      value: isDark ? 'true' : 'false',
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};