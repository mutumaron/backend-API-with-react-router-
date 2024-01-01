import MainNavigation from "../components/MainNavigation";
import React from "react";
import { Outlet,useNavigation } from "react-router-dom";

const RootLayout = () => {
    const navigation = useNavigation();
    return ( 
    <React.Fragment>
        <MainNavigation/>
        <main>
            <Outlet/>
            {navigation.state === 'loading' && <p>Loading...</p>}
        </main>

    </React.Fragment>);
};

export default RootLayout;