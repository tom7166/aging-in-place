// src/pages/index.tsx
import React from 'react';

interface HomeProps {
  highContrastMode: boolean;
  toggleHighContrast: () => void;
}

const Home: React.FC<HomeProps> = ({ highContrastMode, toggleHighContrast }) => {
  return (
    <div>
      <h1>Welcome to Aaron Michael Services</h1>
      <p>High contrast mode is {highContrastMode ? 'ON' : 'OFF'}</p>
      <button onClick={toggleHighContrast}>Toggle Contrast</button>
    </div>
  );
};

export default Home;