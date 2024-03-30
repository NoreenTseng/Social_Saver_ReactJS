import React from "react";
import {useLocation} from "react-router-dom";
import {ConfirmButton, CancelButton} from "../../components/Button";

const EventList = () => {
    const location = useLocation();
    const { date } = location.state || {}; // Access the date data from the state
    return (
        <div className="app-container">   
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Slab" />
            <header className="app-header center-header">
                {/* <ConfirmButton 
                    onClick={() => {
                        //redirect to create event page
                        window.location.pathname = '/createEvent'
                    }}
                className="createEventBackButton">⟵</ConfirmButton> */}
                <h1>Event Detail</h1>
                <div></div> 
            </header>

            <div
                className="relative w-full h-64 bg-contain bg-center bg-no-repeat bg-[url('/public/CreateEvent/aqua2.png')] height: auto; aspect-ratio: 20 / 9;"
            ></div>
            <div className="evenDetail">
                <h3 className="josefinFont">Event Name:</h3>
                <p className="eventContent">Aqua Explorers Coral Kingdom Dive</p>
                <h3>Event Description:</h3>
                <p className="eventContent">Dive beneath the waves to explore the hidden wonders of our vibrant coral reefs. Marvel at the
                kaleidoscope of marine life and the intricate beauty of the underwater world.</p>
                <h3>Event Date:</h3>
                <p className="eventContent">{date}</p>
                <h3>Event Location:</h3>
                <p className="eventContent">Mountain View</p>
            </div>
        </div>
    );
};

export default EventList;