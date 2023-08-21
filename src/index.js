import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './Components/App';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
);