import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
import React from "react";


const EventsRootLayout = () => {
    return (
        <React.Fragment>
            <EventsNavigation/>
            <Outlet/>
        </React.Fragment>
    );
};

export default EventsRootLayout;