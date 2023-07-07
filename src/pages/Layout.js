import React from "react";
import {Outlet} from "react-router-dom";
//import Navbar from "../components/NavBar";
//import Footer from "../components/Footer";

const Layout = () => {

    return(
        <div>
            <div>
                {/*<Navbar/>*/}
            </div>
            <div className="dark:bg-gray-600">
                <Outlet/>
            </div>
            <div className="dark:bg-gray-600">
                {/*<Footer/>*/}
            </div>
        </div>
    );
};

export default Layout;