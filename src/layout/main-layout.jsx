import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Header } from "./header";

export const MainLayout = () => {
    return (
        <>
        <header><Header /></header>
        <main><Outlet /></main>
        <footer><Footer /></footer>
        </>
    )
}