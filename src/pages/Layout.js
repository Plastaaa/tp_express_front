import React from "react";
import {Outlet} from "react-router-dom";
const Layout = () => {

    return(
        <div>
            <div className="dark:bg-gray-600">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;