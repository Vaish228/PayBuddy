import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
function BasicLayout() {
    return (
        <div>
            <Header />
            
            <Footer />
        </div>
    )
}