import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import ErrorPage, { ERROR_KIND } from './pages/ErrorPage';
import TestPage from './pages/TestPage';
import { getCookie } from './utils/Cookie'; // TODO: HOME 접속햿는지 안했는지 체크 => 어떻게 해야 좋을까?

// TODO: HOME 접속햿는지 안했는지 체크 => 어떻게 해야 좋을까?
const CheckEnterHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie('enterHome')) {
      navigate('/home');
    }
  }, []);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <CheckEnterHome />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signin" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<ErrorPage errorType={ERROR_KIND.NOT_FOUND} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
