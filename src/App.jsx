import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Home,
    HomePage,
    CardForm
    
} from './index'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/card-form" element={<CardForm />} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default App
