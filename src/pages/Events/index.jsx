import React from 'react'
import './index.css'

const Events = () => {
    const handleClick = () => {
        // history.push('/target-page');
        window.location.pathname = '/CreateEvent' 
    };



    return (
        <div>
            <h1 className="text-3xl font-bold underline">events</h1>
            <button 
                onClick={handleClick} 
                className="buttonCreateEvent">
                +  {/* Unicode cross character */}
            </button>
        </div>
        

    );
}

export default Events
