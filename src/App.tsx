import React from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JoinPage } from './page/JoinPage';

export const App: React.FC = () => {
  return (<>
      {/*// CSS 리셋*/}
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route
            path='/join'
            element={<JoinPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
