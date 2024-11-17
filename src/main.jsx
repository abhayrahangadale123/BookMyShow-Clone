import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { MyComponent } from './Componets/Contex_Data/C_Data.jsx'; // Adjusted path and name
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>

      <MyComponent>
        <App />
      </MyComponent>
    </StrictMode>
  </BrowserRouter>
);