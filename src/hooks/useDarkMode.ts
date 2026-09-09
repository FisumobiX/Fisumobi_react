import { useEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const { value } = await Preferences.get({ key: 'darkMode' });
      const isDark = value === 'true';
      setDarkMode(isDark);
      updateTheme(isDark);
    };
    loadTheme();
  }, []);

  const updateTheme = (shouldEnable: boolean) => {
    document.body.classList.toggle('dark', shouldEnable);
  };

  const toggleDarkMode = async (shouldEnable: boolean) => {
    setDarkMode(shouldEnable);
    await Preferences.set({ key: 'darkMode', value: String(shouldEnable) });
    updateTheme(shouldEnable);
  };

  return { darkMode, toggleDarkMode };
};