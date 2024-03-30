import React, { useState } from 'react'
import './index.css'

const PopUp = ({user, onClose}) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>User Details</h2>
                <p>Username: {user.username}</p>
                <p>Ranking Change: {user.change}</p>
                <button className = "popupClose josefinFont" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

const LeaderBoard = () => {
    const leaderboardData = [
        {username: "Jerry", score: "900", ranking: "2", change: "+1", isUser: false},
        {username: "Tom", score: "1000", ranking: "1", change: "0", isUser: false},
        {username: "Spike", score: "800", ranking: "3", change: "-1", isUser: false},
        {username: "Tyke", score: "700", ranking: "4", change: "0", isUser: false},
        {username: "Nibbles", score: "600", ranking: "5", change: "+1", isUser: false},
        {username: "Quacker", score: "500", ranking: "6", change: "+1", isUser: false},
        {username: "Butch", score: "400", ranking: "7", change: "-2", isUser: false},
        {username: "Lucy", score: "300", ranking: "8", change: "0", isUser: true},
        {username: "Topsy", score: "200", ranking: "9", change: "+1", isUser: false},
        {username: "Lightning", score: "100", ranking: "10", change: "-1", isUser: false},
        {username: "Zix", score: "90", ranking: "11", change: "0", isUser: false}
    ]

    const [selectedUser, setSelectedUser] = useState(null);

    const onUserClick = (user) => {
        setSelectedUser(user);
    };

    const closePopup = () => {
        setSelectedUser(null);
    };

    const LeaderboardRenderTop = ({data}) => data.map((user) => {
        let className = 'regularIndividual';
        let imageName = '';
        if (user.ranking === "1") {
             className = 'top1Individual';
             imageName = "bg-cover aspect-square bg-center bg-[url('/public/leaderboard/1st.png')] rounded-lg p-6 topRankImage firstImage";
        }else{
            className = "topIndividual"
            if (user.ranking === "2") {
                imageName = "bg-cover aspect-square bg-center bg-[url('/public/leaderboard/2nd.png')] rounded-lg p-6 topRankImage";
            }else if (user.ranking === "3") {
                imageName = "bg-cover aspect-square bg-center bg-[url('/public/leaderboard/3rd.png')] rounded-lg p-6 topRankImage";
            }
        }
        return (
            <div key = {user.username} className = {className} onClick={() => onUserClick(user)}>
                <div className = {imageName}></div>
                <b className = "josefinFont largeFont">{user.username}</b>
                <p className = "josefinFont">{user.score}</p>
            </div>
        )
    })

    const LeaderboardRenderOthers = ({data}) => data.map((user) => {
        let className = 'regularIndividual';
        if(user.isUser){
            className = 'userIndividual';
        }
        return (
            <div key = {user.username} className = {className} onClick={() => onUserClick(user)}>
                <b className = "josefinFont">{user.ranking}</b>
                <p className = "josefinFont">{user.username}</p>
                <p className = "josefinFont">{user.score}</p>
            </div>
        )
    })

    const LeaderboardRenderMyUser = ({data}) => data.map((user) => {
        if(user.isUser){
            return (
                <div key = {user.username} className = "myUserIndividual" onClick={() => onUserClick(user)}>
                    <div className="myUserIndividualLine">
                        <b>Ranking: {user.ranking} </b>
                        <b>UserName: {user.username}</b>
                    </div>
                <div className='myUserIndividualLine'>
                        <p class="tooltip">Score: {user.score} <span class="tooltiptext">You can gain more score by attending offline events with other users!</span></p>
                        <p>Ranking Change: {user.change}</p>
                </div>
                </div>
            )
        }
    })

    return (
        <div className='app-container'>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Slab" />
            <header className ="app-header center-header">
                <h1 className='josefinFont font-bold'>Leaderboard</h1>
            </header>
            <div className = 'topDiv'>
                <LeaderboardRenderTop data={leaderboardData.slice(0, 3)} />
            </div>
            <div className = 'regularDiv'>
                <LeaderboardRenderOthers data={leaderboardData.slice(3)} />
            </div>
            <div className = "myUserDiv">
                <p className="text-2xl font-bold josefinFont lightBrown" >My User</p>
                <LeaderboardRenderMyUser data={leaderboardData} />
            </div>
            {selectedUser && <PopUp user={selectedUser} onClose={closePopup} />}
        </div>
    );
}

export default LeaderBoard
