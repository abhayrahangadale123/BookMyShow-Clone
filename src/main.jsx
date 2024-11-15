import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import   {MyComponent} from './Componets/Contex_Data/C_Data.jsx'; // Adjusted path and name


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComponent>
      <App />
    </MyComponent>
  </StrictMode>,
);