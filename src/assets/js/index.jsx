import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/style.scss';
import App from './App';
import { AuthContextProvider } from '../../context/auth-context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
