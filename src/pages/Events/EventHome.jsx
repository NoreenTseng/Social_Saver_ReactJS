import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import './EventHome.css' // Make sure to create a corresponding CSS file for styling

// Importing images from the local assets folder
import socialImage from './events_category_icons/social.png'
import techImage from './events_category_icons/tech.png'
import artAndMusicImage from './events_category_icons/art_and_music.png'
import exerciseImage from './events_category_icons/exercise.png'
import { ConfirmButton } from '../../components/Button'

function EventHome() {
    const navigate = useNavigate()

    // Categories with their respective images
    const categories = [
        { name: 'Social', image: socialImage },
        { name: 'Tech', image: techImage },
        { name: 'ArtAndMusic', image: artAndMusicImage },
        { name: 'Exercise', image: exerciseImage },
    ]

    // Function to handle navigation to the Events page with category
    const handleCategorySelect = (category) => {
        navigate(`/events_search?category=${category}`)
    }

    return (
        <div className="event-home-container">
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Josefin+Slab"
            />
            <header className="app-header center-header">
                <h1><b>Search Events</b></h1>
            </header>
            <div className="categories-container">
                {categories.map(({ name, image }) => (
                    <div
                        key={name}
                        className="category"
                        onClick={() => handleCategorySelect(name)}
                    >
                        <img
                            src={image}
                            alt={name}
                            className="category-image"
                        />
                        <div className="category-name">
                            {name.replace('And', ' & ')}
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmButton onClick={() => navigate('/events_search')}>
                View All
            </ConfirmButton>
        </div>
    )
}

export default EventHome


