import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div>
            <ul>
                <Link to={'/events'}>
                    <a href="">Events</a>
                </Link>
                <Link to={'/streamers'}>
                    <a href="">Streamers</a>
                </Link>
            </ul>
            <div className='main-menu'>
                <div className="team-blue">
                    <div className='logo'>

                    </div>
                    <div className="watch-button">

                    </div>
                </div>
                <div className="we-are-recruiting">
                    <div className="buttons">
                        <div className="join-the-team">

                        </div>
                        <div className="mentor-enquiries">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
