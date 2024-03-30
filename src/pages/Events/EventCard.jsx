import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
} from '@mui/material'
import { ConfirmButton } from '../../components/Button'

const EventCard = ({ event, onRegister, showRSVPButton = true, isRSVPed }) => {
    const navigate = useNavigate()

    const handleDetailsClick = () => {
        navigate(`/events/${event.id}`)
    }

    const handleRSVPClick = () => {
        if (!isRSVPed) {
            onRegister(event.id)
        }
    }

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardActionArea onClick={handleDetailsClick}>
                {event.images && event.images.length > 0 && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={event.images[0]}
                        alt={event.name}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {showRSVPButton && !isRSVPed && (
                <CardActions>
                    <ConfirmButton onClick={handleRSVPClick}>
                        RSVP
                    </ConfirmButton>
                </CardActions>
            )}
            {isRSVPed && (
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        RSVPed
                    </Typography>
                </CardContent>
            )}
        </Card>
    )
}

export default EventCard
