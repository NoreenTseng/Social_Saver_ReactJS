import * as React from 'react'
import { useEffect } from 'react'
import './index.css'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import GradingIcon from '@mui/icons-material/Grade'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import PeopleIcon from '@mui/icons-material/People'
import StarRateIcon from '@mui/icons-material/StarRate'
export default function IconLabelTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        window.location.pathname = pathArr[newValue]
    }
    const pathArr = [
        '',
        'events_home',
        'leaderboard',
        'createevent',
        'matchbuddy',
        'report',
    ]
    const curIndex = pathArr.indexOf(window.location.pathname.split('/')[1])
    return (
        <div
            style={{
                background: '#d9d9d9',
                margin: '-2%',
                marginBottom: '-3%',
            }}
            className="fixed bottom-3 left-2 right-2 bg-purple-bg border-4 border-purple-border shadow-lg flex"
        >
            <Tabs
                value={curIndex}
                onChange={handleChange}
                aria-label="icon label tabs example"
                className="menu-tab flex overflow-x-auto w-full"
            >
                <Tab icon={<HomeIcon />} label="home" className="w-1/6" />
                <Tab icon={<SearchIcon />} label="event" className="w-1/6" />
                <Tab icon={<GradingIcon />} label="board" className="w-1/6" />
                <Tab
                    icon={<BorderColorIcon />}
                    label="create"
                    className="w-1/6"
                />
                <Tab icon={<PeopleIcon />} label="buddy" className="w-1/6" />
                <Tab icon={<StarRateIcon />} label="report" className="w-1/6" />
            </Tabs>
        </div>
    )
}
