import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import '../styles/Layout.css';

export default function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
        </div>
    )
}