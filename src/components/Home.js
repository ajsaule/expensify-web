import React from 'react'
import { Link } from 'react-router-dom'
import Calculator from './Calculator'
import './Home.css'

export default function Home() {
    return (
        <div>
            <h1>Logo with splash image and clickthrough button</h1>
            <Link to={'/calculator'}>
                <button>Log expenses</button>
            </Link>
        </div>
    )
}
