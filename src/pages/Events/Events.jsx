import React, { useState } from 'react'
import './Events.css'
import { Button, TextField, List, ListItem, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import HistoryIcon from '@mui/icons-material/History'
import EventCard from './EventCard' // EventCard component for displaying events
import { useNavigate, useSearchParams } from 'react-router-dom'

const eventsData = [
    {
        id: 1,
        category: 'Exercise',
        name: 'Hatha Yoga',
        description:
            'Join our serene Yoga in the Park event and find your inner peace through guided meditation and gentle stretching a midst the calming whispers of nature.',
        images: ['/images/events/Hatha_Yoga.png'],
    },
    {
        id: 2,
        category: 'Exercise',
        name: 'Bikram Yoga',
        description:
            'Step into the heat for our invigorating Bikram Yoga sessions, where 26 postures and two breathing exercises in a heated room will challenge your limits and detoxify your body.',
        images: ['/images/events/Bikram_Yoga.png'],
    },
    {
        id: 3,
        category: 'Exercise',
        name: 'Yin Yoga',
        description:
            'Unwind with our Yin Yoga evening, a meditative practice that targets deep connective tissues, enhancing flexibility and inner tranquility through prolonged, passive holds.',
        images: ['/images/events/Yin_Yoga.png'],
    },
    {
        id: 4,
        category: 'Exercise',
        name: 'Hatha Yoga',
        description:
            'Join our serene Yoga in the Park event and find your inner peace through guided meditation and gentle stretching a midst the calming whispers of nature.',
        images: ['/images/events/Hatha_Yoga.png'],
    },
    {
        id: 5,
        category: 'Exercise',
        name: 'Power Yoga',
        description:
            'Energize your body and mind with our Power Yoga workshop, a vigorous fitness-based approach that builds strength, flexibility, and concentration through dynamic sequence.',
        images: ['/images/events/Power_Yoga.png'],
    },
    {
        id: 6,
        category: 'Exercise',
        name: 'Sports Game',
        description:
            'Experience the thrill of the game at our Community Sports Events, where local teams clash in a vibrant display of skill, teamwork, and athletic prowess.',
        images: ['/images/events/Sports_Game.png'],
    },
    {
        id: 7,
        category: 'Exercise',
        name: 'Diving Event',
        description:
            'Dive into adventure at the Coral Reef Exploration Dive, where the beauty of marine life meets the excitement of underwater discovery.',
        images: [
            '/images/events/Diving_Event.png',
            '/images/events/Diving_02.png',
            '/images/events/Diving_03.png',
        ],
    },
    {
        id: 8,
        category: 'Social',
        name: 'Global Food Fair',
        description:
            'Dive into a world of flavors at the Global Street Food Fair, where local and international cuisines meet in a vibrant outdoor setting.',
        images: ['/images/events/Global_Food_Fair.png'],
    },
    {
        id: 9,
        category: 'Social',
        name: 'Rooftop Jazz Soiree',
        description:
            'Enjoy an evening of smooth jazz and stunning city views at this exclusive rooftop event. Networking with each other and Enjoying a variety of Jazz music.',
        images: ['/images/events/Rooftop_Jazz_Soiree.png'],
    },
    {
        id: 10,
        category: 'Social',
        name: 'Beachside BBQ Bash',
        description:
            'A fun-filled beach barbecue with live music, games, and a variety of grilled delicacies. Come to enjoy the atmosphere of the crowed and admire the sun.',
        images: ['/images/events/Beachside_BBQ_Bash.png'],
    },
    {
        id: 11,
        category: 'ArtAndMusic',
        name: 'Art Gallery Opening',
        description:
            'Discover the world of art at this elegant gallery opening, showcasing a variety of paintings and sculptures in a sophisticated setting.',
        images: ['/images/events/Art_Gallery_Opening.png'],
    },
    {
        id: 12,
        category: 'ArtAndMusic',
        name: 'Symphony Under the Stars',
        description:
            'Experience a night of classical music with a live symphony orchestra performing in an open-air venue.',
        images: ['/images/events/Symphony_Under_the_Stars.png'],
    },
    {
        id: 13,
        category: 'ArtAndMusic',
        name: 'Indie Film Festival',
        description:
            'A celebration of independent cinema, featuring screenings of short films, documentaries, and panel discussions with filmmakers.',
        images: ['/images/events/Indie_Film_Festival.png'],
    },
    {
        id: 14,
        category: 'Tech',
        name: 'Future Tech Conference',
        description:
            'Join industry leaders at this cutting-edge tech conference, featuring interactive tech demonstrations and networking opportunities.',
        images: ['/images/events/Future_Tech_Conference.png'],
    },
    {
        id: 15,
        category: 'Tech',
        name: 'Virtual Reality Expo',
        description:
            'Explore the latest advancements in virtual reality technology at this immersive expo. You can travel to everywhere in the world. You can also admire earth from the universe.',
        images: ['/images/events/Virtual_Reality_Expo.png'],
    },
    {
        id: 16,
        category: 'Tech',
        name: 'AI Innovators Summit',
        description:
            'A gathering of the brightest minds in artificial intelligence, discussing the future impact and developments in the field.',
        images: ['/images/events/AI_Innovators_Summit.png'],
    },
]

function Events() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredEvents, setFilteredEvents] = useState(eventsData)
    const [registeredEvents, setRegisteredEvents] = useState([])
    const [searchParams] = useSearchParams()
    const categoryQuery = searchParams.get('category')
    const navigate = useNavigate()

    const handleEventClick = (eventId) => {
        navigate(`/events/${eventId}`)
    }

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase()
        setSearchTerm(value)
        filterEvents(value, categoryQuery)
    }

    const filterEvents = (searchValue, category) => {
        let filtered = eventsData

        if (category) {
            filtered = filtered.filter((event) => event.category === category)
        }
        if (searchValue) {
            filtered = filtered.filter((event) =>
                event.name.toLowerCase().includes(searchValue)
            )
        }

        setFilteredEvents(filtered)
    }

    // Call filterEvents initially and when categoryQuery changes
    React.useEffect(() => {
        filterEvents(searchTerm, categoryQuery)
    }, [categoryQuery, searchTerm]) // Only re-run the effect if categoryQuery changes

    const handleRegisterEvent = (eventId) => {
        const registeredEvent = eventsData.find((event) => event.id === eventId)
        setRegisteredEvents((prev) => [...prev, registeredEvent])
    }

    // Functionality to show the history dialog/modal
    const handleOpenHistory = () => {
        navigate('/events/rsvp-history', { state: { registeredEvents } })
    }

    return (
        <div className="events-container">
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Josefin+Slab"
            />
            <header className="app-header center-header">
                <button
                    class="back-button"
                    onClick={() => {
                        window.location.pathname = '/events_home'
                    }}
                >
                    ⟵
                </button>
                <h1>Search Events</h1>
                <div></div>
            </header>
            <div className="search-bar-container">
                <TextField
                    className="search-input"
                    label="Search Events"
                    variant="outlined"
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <IconButton className="history-btn" onClick={handleOpenHistory}>
                    <span className="mr-2 text-sm">Registered Events</span>
                    <HistoryIcon />
                </IconButton>
            </div>
            <div className="event-cards-container">
                {filteredEvents.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onRegister={() => handleRegisterEvent(event.id)}
                        navigateToDetails={() => handleEventClick(event.id)}
                        isRSVPed={registeredEvents.some(
                            (registeredEvent) => registeredEvent.id === event.id
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Events
