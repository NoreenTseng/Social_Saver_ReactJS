import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ConfirmButton, CancelButton} from "../../components/Button";

const CreateEvent= () =>{
    const navigate = useNavigate();
    const currentDateTime = new Date().toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
    const [eventDate, setEventDate] = useState(currentDateTime);

    // Handler to set the event date
    const handleDateChange = (e) => {
        setEventDate(e.target.value);
    };
    // Handler for form submission or button click
    const handleSubmit = () => {
        //check if date is empty
        if (!eventDate) {
            alert('Please select a date');
            return;
        }
        //check evemt data is in the future
        const now = new Date();
        const eventDateTime = new Date(eventDate);
        if (eventDateTime < now) {
            alert('Please select a date in the future');
            return;
        }
        //check if name is empty
        const name = document.getElementById('name').value;
        if (!name) {
            alert('Please enter a name');
            return;
        }
        //check if description is empty
        const description = document.getElementById('description').value;
        if (!description) {
            alert('Please enter a description');
            return;
        }
        // Redirect to the confirm page and pass the date data
        navigate('/confirm', { state: { date: eventDate } }); // use navigate with state
    };
    return(
        <div className="form-container">
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Slab" />
            <header className="app-header center-header">
                {/* <ConfirmButton 
                    onClick={() => {
                        //redirect to home page
                        window.location.pathname = '/'
                    }}
                className="createEventBackButton">⟵</ConfirmButton> */}
                <h1 className="josefinFont largeFont"><b>Create Event</b></h1>
                <div></div> 
            </header>
            {/* <form id="createEventForm"> */}
                <label for="name" className=" josefinFont"><b>Name:</b><br></br></label>
                <input type="text" id="name" className="input-text josefinFont" name="eventname"/>
                <br></br>

                <label for="description" className=" josefinFont"><b>Description:</b><br></br></label>
                <textarea id="description" className="input-textarea  josefinFont" name="eventdescription"></textarea>

                <label className="josefinFont"><b>Type:</b></label>
                <div>
                    <input type="radio" id="social" name="eventtype" value="social"/>
                    <label for="social" className=" josefinFont">Social</label>

                    <input type="radio" id="tech" name="eventtype" value="tech" />
                    <label for="tech" className=" josefinFont">Tech</label>

                    <input type="radio" id="art" name="eventtype" value="art" />
                    <label for="art" className=" josefinFont">Art&Music</label>

                    <input type="radio" id="exercise" name="eventtype" value="exercise" checked/>
                    <label for="exercise" className=" josefinFont">Exercise</label>
                </div>

                <br></br>
                <label for="date" className=" josefinFont"><b>Date:</b></label>
                <p></p>
                <input 
                    type="datetime-local"
                    id="date" 
                    className="input-datetime" 
                    name="eventdate" 
                    value={eventDate}
                    onChange={handleDateChange}
                    className=" josefinFont"
                />
                <p></p>
                <label for="location" className=" josefinFont"><b>Location:</b></label>
                
                <input type="text" id="location" className="input-text josefinFont" name="eventlocation" placeholder="Mountain View"/>
                <p></p>

                <label for="addPicture" className=" josefinFont"><b>Pictures:</b></label>
                <p></p>

                {/* <ConfirmButton type="button" id="addPicture" className="add-button">+</ConfirmButton> */}
                <div
                    className="relative w-full h-64 bg-contain bg-center bg-no-repeat bg-[url('/public/CreateEvent/aqua.png')] height: auto; aspect-ratio: 20 / 9;"
                ></div>

                <ConfirmButton 
                    onClick={handleSubmit}
                type="button" className="publish-button josefinFont">Publish</ConfirmButton>
            {/* </form> */}
        </div>
    )
}

export default CreateEvent;