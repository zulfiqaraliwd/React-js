import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Input from './component/Input';
import Button from './component/Button';
import Heading ,{Heading22,Field}from './component/Heading';
import Navbar from './component/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
<Input name = "zulfiqar" age = "22"/>
<Button />
<Heading/>
<Heading22 />
<Field />
<Navbar />

  </>
);


