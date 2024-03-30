import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./index.css";
import {ConfirmButton, CancelButton} from "../../components/Button";
const CreateEventConfirm= () =>{
    const location = useLocation();
    const { date } = location.state || {}; // Access the date data from the state
    const navigate = useNavigate();
    const handleView = () => {
        // Redirect to the event list page
        navigate('/eventList', { state: { date: date } });
    }

    return (
        <div className="app-container josefinFont">   
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Slab" />
            <header className="app-header center-header">
                {/* <ConfirmButton 
                    onClick={() => {
                        //redirect to previous page
                        window.history.back();
                    }}
                className="createEventBackButton">⟵</ConfirmButton> */}
                <h1 className="largeFont">Confirm</h1>
                <div></div> 
            </header>

            <main className="mainContent">
                <p className="eventContent">Event Published Successfully!</p>
                {date && <p className="eventContent">Event Date: {date}</p>}
                <ConfirmButton
                    onClick={handleView} 
                        type="button"
                        className="josefinFont"
                    >
                View</ConfirmButton>
            </main>
        </div>
    );
}

export default CreateEventConfirm;