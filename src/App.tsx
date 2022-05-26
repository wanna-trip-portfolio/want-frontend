import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import ErrorPage, { ERROR_KIND } from './pages/ErrorPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
