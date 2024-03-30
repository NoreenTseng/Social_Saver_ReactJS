import React from 'react'
import './index.css'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';


const Report = () => {

    const data = {
        labels: ['Watching Video', 'Liking Posts', 'Chatting'],
        datasets: [
          {
            label: 'Weekly Activity',
            data: [60, 30, 10], // These numbers represent the size of each pie slice
            backgroundColor: ['#FFD54F', '#FF4081', '#64FFDA'],
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      };

    const options = {
        plugins: {
          legend: {
            display: true, // Show the legend
            position: 'bottom', // Position the legend at the bottom
          },
        },
        // Maintain aspect ratio or not
        maintainAspectRatio: false,
    };



    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&display=swap">
        </link>
        <div class="app-container">
            <header class="app-header  center-header">
                <button 
                    onClick={() => {
                        window.location.pathname = '/'
                    }}
                    className="back-button">⟵</button>
                <h1><b>Weekly Report</b></h1>
                <div></div> 
            </header>
            <section class="usage-report">
                <div class="card">
                    <h2>Weekly Usage Report</h2>
                    <p>Total Usage: <b>45.6</b> h this week</p>
                </div>
            </section>
            <div class="weekly-activity-card">
                <div class="card-header">
                    <h2>Weekly Activity</h2>
                    <button 
                        onClick={() => {
                            window.location.pathname = '/report_details'
                        }}
                    class="view-details">View details</button>
                </div>
                <div class="activity-chart">
                    <Pie data={data} options={options} />
                </div>
            </div>

            <section class="statistics-card">
                <div class="card-header">
                    <h2>Daily usage statistics </h2>
                    <div class="tooltip">?
                        <span class="tooltiptext">Tooltip text</span>
                    </div>
                </div>
                <div
                    className="relative w-full h-64 bg-contain bg-center bg-no-repeat bg-[url('/public/report/time_bar.png')] height: auto; aspect-ratio: 20 / 9;"
                ></div>
                <div class="card-header">
                    <h2> </h2>
                </div>

       
            </section>
        </div>
    </>
    )

}

export default Report
