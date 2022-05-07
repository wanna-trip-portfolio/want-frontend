import React from 'react';
import {Reset} from 'styled-reset';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {JoinPage} from './page/JoinPage';
import {JoinPage2} from "./future/JoinPage2";

export const App: React.FC = () => {
    return (
        <>
            <Reset/> {/*// CSS 리셋*/}
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/join'
                        element={<JoinPage/>}
                    />
                    <Route
                        path='/join2'
                        element={<JoinPage2/>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
