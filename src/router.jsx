import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Custom from "./pages/Custom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to="/home"/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },          
            {
                path: '/product/:id',
                element: <Product/>
            },
            {
                path:'/contact' ,
                element: <Contact/>
            },
            {
                path:'/products',
                element: <Products/>
            },
            {
                path:'/category',
                element:<Category/>
            },
            {
                path:'/custom',
                element: <Custom/>
            } 
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/home"/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            },
            {
                path:'/contact' ,
                element: <Contact/>
            },
            {
                path:'/products',
                element: <Products/>
            },
            {
                path:'/category',
                element:<Category/>
            },
            {
                path:'/custom',
                element: <Custom/>
            }       
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;