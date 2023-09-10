import './assets/styles/style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
