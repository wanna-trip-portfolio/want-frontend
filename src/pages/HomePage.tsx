import React, { useEffect } from 'react';
import { setCookie } from '../utils/Cookie';

const HomePage: React.FC = () => {
  useEffect(() => {
    setCookie<boolean>('enterHome', true);
  }, []);
  return <div>Home</div>;
};

export default HomePage;
