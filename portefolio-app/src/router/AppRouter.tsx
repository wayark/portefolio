import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { CompetenceDisplayProvider } from '../contexte/competenceDisplay';
import Internship from '../pages/Internship/Internship';

function AppRouter() {
    return (
        <Routes>
            <Route path="/portefolio/" element={<Home />} />
            <Route path="/portefolio/internship" element={< Internship/>} />
        </Routes>
    );
}
export default AppRouter;