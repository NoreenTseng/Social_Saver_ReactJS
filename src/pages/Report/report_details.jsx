import React, { useState } from 'react';

const ReportDetails = () => {
    const [activeTab, setActiveTab] = useState('sun');

    const dailySchedule = {
        sun: {
            events: [
                { startHour: 6, title: 'Watching Video', duration: '2h' },
                { startHour: 8, title: 'Morning Yoga Session', duration: '1h' },
                { startHour: 22, title: 'Watching Video', duration: '2h' },
                { startHour: 23, title: 'Watch the Moments from @Luna, @Jade...', duration: '1h' }
            ],
            date: '19'
        },
        mon: {
            events: [
                { startHour: 5, title: 'Celebrating Milestones Online', duration: '1h' },
                { startHour: 6, title: 'Thumbs Up for Foodie Pics', duration: '2h' },
                { startHour: 18, title: 'Watching Video', duration: '1h' },
                { startHour: 22, title: 'Celebrating Milestones Online', duration: '1h' }
            ],
            date: `20`

        },
        tue: {
            events: [
                { startHour: 0, title: 'Watching Video', duration: '2h' },
            ],
            date: `21`
        },
        wed: {
            events: [
                { startHour: 1, title: 'Chatting with @Luna', duration: '1h' }
            ],
            date: `22`
        },
        thu: {
            events: [
                { startHour: 2, title: 'Watching video about Morning Yoga', duration: '2h' },
                { startHour: 4, title: 'Gaming Talk with @Chris', duration: '2h' },
                { startHour: 9, title: 'Watching Video', duration: '2h' },
                { startHour: 10, title: 'Appreciating Travel Stories', duration: '1h' }
            ],
            date: `23`
        },
        fri: {
            events: [
                { startHour: 6, title: 'Catching Up with @Jay', duration: '2h' },
                { startHour: 8, title: 'Coffee Chat with @Mia', duration: '1h' },
                { startHour: 20, title: 'Thumbs Up for Foodie Pics', duration: '2h' }
            ],
            date: `24`
        },
        sat: {
            events: [
                { startHour: 0, title: 'Thumbs Up for Foodie Pics', duration: '2h' }
            ], 
            date: `25`
        }
    };
    

    const openTab = (dayId) => {
        setActiveTab(dayId);
    };

    const hours = [...Array(24).keys()]; 

    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&display=swap">
        </link>
        <div className="app-container">
            <header className="app-header center-header">
                <button 
                    onClick={() => {
                        window.location.pathname = '/report'
                    }}
                    className="back-button">⟵</button>
                <h1>Usage Report</h1>
                <div></div> 
            </header>
            
            <div className="tabs">
                {Object.keys(dailySchedule).map((day) => (
                    <div 
                        key={day}
                        className={`tab ${activeTab === day ? 'active' : ''}`} 
                        onClick={() => openTab(day)}
                    >
                        <div className="day-name">{day.toUpperCase().substring(0, 3)}</div>
                        <div className="date">{dailySchedule[day].date}</div>
                    </div>
                ))}
            </div>


            <div className="schedule-container">
            {hours.map(hour => (
                <div key={hour} className="hour-container">
                    <div className="hour-label">{hour}:00</div>
                    <div className="hour-line"></div>
                </div>
            ))}
                <div className="events">
                    {dailySchedule[activeTab] && dailySchedule[activeTab].events &&
                    dailySchedule[activeTab].events.map((event, index) => (
                        <div 
                            key={index} 
                            className="event" 
                            style={{ 
                                top: `${event.startHour * 50}px`, 
                                height: `${event.duration === '1h' ? 50 : 100}px`
                            }}
                        >
                            {event.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ReportDetails;
