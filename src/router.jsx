import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Shop from "./pages/shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

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
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            }
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/cart',
                element: <Cart/>
            } 
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;