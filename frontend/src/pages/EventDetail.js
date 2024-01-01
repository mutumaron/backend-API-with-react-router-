import { useRouteLoaderData,json, redirect } from "react-router-dom";
import React from "react";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');
    return (
        <React.Fragment>
            <EventItem event={data.event}/>

        </React.Fragment>
    )
};

export default EventDetailPage;

export const loader = async ({request,params}) => {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);
    if(!response.ok){
        throw json(
            {message:'Could not fetch details for selected event.'},
            {status:500}
        );
    }else{
        return response;
    }
}; 

export const action = async ({request,params}) => {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId,{
        method:request.method
    });

    if (!response.ok){
        throw json(
            {message:'Could not delete event.'},
            {status:500}
        );
    }
    return redirect('/events');
};