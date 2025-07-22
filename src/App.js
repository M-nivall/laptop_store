import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { CategoryProvider } from "./components/CategoryContext";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
const Layout = () =>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:productsData
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>,
      },
      {
        path:"/contacts",
        element:<Contacts/>,
      }
    ],
  },
]);
function App() {
  return (
    <div>
    <CategoryProvider>
      <RouterProvider router={router} />
    </CategoryProvider>
    </div>
  );
}

export default App;
