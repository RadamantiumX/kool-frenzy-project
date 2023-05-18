import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../layoutComponent/NavBar";
import Footer from "../layoutComponent/Footer";


export default function GuestLayout() {
    return(
        <>
         <NavBar/>
            <Outlet/>
         <Footer/>
        </>
    )
}