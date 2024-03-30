import React from 'react'
import './index.css'
const Home = () => {
    return (
        <>
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Josefin+Slab"
            />
            <h1 className="h1-welcome pt-6">Welcome!</h1>
            <div className="bg-container">
                <h3 className="h3-info pt-5">
                    Break Free from Social Media Reconnect with Your World
                </h3>
            </div>
            <div className="-mt-20 grid grid-cols-2 gap-4 p-4">
                <div>
                    <div
                        onClick={() => {
                            window.location.pathname = '/leaderboard'
                        }}
                        className="bg-cover aspect-square bg-center bg-[url('/public/home/learerboard.png')] rounded-lg p-6"
                    ></div>
                    <p>Leader Board</p>
                </div>

                <div>
                    <div
                        onClick={() => {
                            window.location.pathname = '/events_home'
                        }}
                        className="bg-cover bg-center aspect-square rounded-lg p-6
                bg-[url('/public/home/events.png')]
                "
                    ></div>
                    <p>Events</p>
                </div>
                <div>
                    <div
                        className="bg-cover bg-center bg-[url('/public/home/report.png')]
                 aspect-square rounded-lg p-6"
                        onClick={() => {
                            window.location.pathname = '/report'
                        }}
                    ></div>
                    <p>Report</p>
                </div>
                <div>
                    <div
                        onClick={() => {
                            window.location.pathname = '/matchbuddy'
                        }}
                        className="bg-cover bg-center
                bg-[url('/public/home/buddy.png')]
                aspect-square rounded-lg p-6"
                    ></div>
                    <p>Match Buddies</p>
                </div>
            </div>
        </>
    )
}

export default Home
