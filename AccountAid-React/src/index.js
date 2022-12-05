import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import ChakraTheme from './theme/ChakraTheme';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CalendarProvider } from './context/CalendarContext';
import { AuthProvider } from './context/AuthContext';
import { DbProvider } from './context/DbContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraTheme>
        <AuthProvider>
          <UserProvider>
            <DbProvider>
              <CalendarProvider>
                <App />
              </CalendarProvider>
            </DbProvider>
          </UserProvider>
        </AuthProvider>
      </ChakraTheme>
    </BrowserRouter>
  </React.StrictMode>
);