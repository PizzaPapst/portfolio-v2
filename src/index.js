import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Work from './pages/Work';
import Bachelorarbeit from "./pages/Bachelorarbeit"
import About from "./pages/About"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let app
switch (window.location.pathname){
  case "/":
    app = <Work/>
    break
  case "/Work":
    app = <Work/>
    break
  case "/About":
    app = <About/>

}
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
