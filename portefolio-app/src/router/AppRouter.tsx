import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import But from '../pages/But/But'; 

function AppRouter() {
    return (
        <Routes>
            <Route path="/portefolio/" element={<Home />} />
            <Route path="/portefolio/but" element={<But />} />
        </Routes>
    );
}
export default AppRouter;