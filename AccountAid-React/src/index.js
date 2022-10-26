import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import ChakraTheme from './theme/ChakraTheme';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CalendarProvider } from './context/CalendarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraTheme>
        <UserProvider>
          <CalendarProvider>
            <App />
          </CalendarProvider>
        </UserProvider>
      </ChakraTheme>
    </BrowserRouter>
  </React.StrictMode>
);