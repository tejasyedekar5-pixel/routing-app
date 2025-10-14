import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import'../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/errorComponent/Error.js';
import Contact from './components/contactComponent/Contact.js';
import Home from './components/homeComponent/Home.js';
import FetchProducts from './components/productComponent/FetchProducts.js';
import ProductDetails from './components/productComponent/ProductDetails.js';



let routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        index:true,
        element:<Home/>
      },
      {
        path:"/products",
        element:<FetchProducts/>
      },
      {
        path:"/product/:productId",
        element:<ProductDetails/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>
 <RouterProvider router={routes}/>
);
