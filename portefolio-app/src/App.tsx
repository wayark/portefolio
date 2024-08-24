import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
