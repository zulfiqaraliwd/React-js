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
  <Navbar />
    <App />
    
<Input name = "Zulfiqar"  age = {77}/>
<Input name = "Ali"  age = {88}/>
<Button />
<Heading />
<Heading22 />
<Field />


  </>
);


