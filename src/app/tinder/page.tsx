// TinderPage.js
'use client'

import React, { useState } from 'react';
import Card from '../JobCard'; // Create a Card component for each user profile
import './page.css'; // Import the CSS file
import jobs from './../../../data/offers.json';

const TinderPage = () => {
  const [profiles, setProfiles] = useState(jobs);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleSwipeLeft = () => {
    // Handle swiping left, update state accordingly
    let newIndex = currentProfileIndex - 1;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentProfileIndex(newIndex);
  };

  const handleSwipeRight = () => {
    // Handle swiping right, update state accordingly
    let newIndex = (currentProfileIndex + 1) % profiles.length;
    setCurrentProfileIndex(newIndex);
  };

  return (
    <div className="tinder-page">
      {profiles.length > 0 && currentProfileIndex < profiles.length && (
        <Card
          key={profiles[currentProfileIndex].id}
          job={profiles[currentProfileIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      )}
      {currentProfileIndex >= profiles.length && <p>No more profiles to show.</p>}
    </div>
  );
};

export default TinderPage;
