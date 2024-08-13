import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrendingCards from './Home';
import FindEventsPage from './FindEventPage';

const ParentComponent = () => {
    const [likedEvents, setLikedEvents] = useState([]);

    const handleLike = (index) => {
        if (!likedEvents.includes(index)) {
            setLikedEvents([...likedEvents, index]);
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/find-events" element={<FindEventsPage likedEvents={likedEvents} />} />
                <Route path="/" element={<TrendingCards onLike={handleLike} />} />
            </Routes>
        </Router>
    );
};

export default ParentComponent;
