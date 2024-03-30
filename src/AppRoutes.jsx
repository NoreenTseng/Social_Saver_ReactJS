import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Report from './pages/Report'
import MatchBuddy from './pages/MatchBuddy'
import LeaderBoard from './pages/LeaderBoard'
import CreateEvent from './pages/CreateEvent'
import ReportDetails from './pages/Report/report_details'
import CreateEventConfirm from './pages/CreateEvent/confirm'
import EventList from './pages/CreateEvent/event_list'
import Events from './pages/Events/Events'
import EventDetails from './pages/Events/EventDetails'
import RSVPHistory from './pages/Events/RSVPHistory'
import EventHome from './pages/Events/EventHome'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events_home" element={<EventHome />} />
            <Route path="/events_search" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/rsvp-history" element={<RSVPHistory />} />
            <Route path="/report" element={<Report />} />
            <Route path="/matchbuddy" element={<MatchBuddy />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/createevent" element={<CreateEvent />} />
            <Route path="/report_details" element={<ReportDetails />} />
            <Route path="/confirm" element={<CreateEventConfirm />} />
            <Route path="/eventList" element={<EventList />} />
        </Routes>
    )
}
export default AppRoutes
