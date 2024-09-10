import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes';
import { AuthProvider } from './hooks/AuthContext';


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
