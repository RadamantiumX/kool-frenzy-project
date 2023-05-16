import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../layoutComponent/NavBar";

export default function GuestLayout() {
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}