import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useConfig from 'hooks/useConfig';

export default function DarkModeButton() {
  const { isDarkMode, darkMode } = useConfig();

  return (
    <DarkModeSwitch
      style={{ position: 'fixed', bottom: '50px', right: '50px' }}
      checked={isDarkMode}
      onChange={darkMode}
      size={40}
    />
  );
}
