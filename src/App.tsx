import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './comopnents/Button/button';
import Register from './comopnents/Register/register';
import Login from './comopnents/Login/login';
import Table from './comopnents/Table/table';
function App() {
  return (
    <div className="App">
      <Button />
      <Register />
      <Login />
      <Table />
    </div>
  );
}

export default App;
