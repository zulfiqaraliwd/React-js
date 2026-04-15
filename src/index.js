import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Input from './component/Input';
import Button from './component/Button';
import Heading ,{Heading22,Field}from './component/Heading';
import Navbar from './component/Navbar';
import Navigation from './routing/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar />
  <Navigation />
    <App />
    
    <Input name = "Zulfiqar"  age = {77}/>
<Input name = "Ali"  age = {88}/>
<Button btn = "click"/>
<Button btn = "contact"/>
<Heading />
<Heading22 />
<Field />


  </>
);


