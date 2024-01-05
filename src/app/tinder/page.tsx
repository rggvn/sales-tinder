// TinderPage.js
'use client'

import React, { useEffect, useState } from 'react';
import Card from '../JobCard'; // Create a Card component for each user profile
import './page.css'; // Import the CSS file
import jobs from './../../../data/offers.json';

type SwipedJobs = {
  left: any[],
  right: any[]
}

const defaultSwipedJobs: SwipedJobs = {
  left: [],
  right: []
}

const TinderPage = () => {
  const [profiles, setProfiles] = useState(jobs);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const [swipedJobs, setSwipedJobs] = useState<SwipedJobs>(defaultSwipedJobs);

  // Load jobs from local storage on component mount
  useEffect(() => {
    const savedSwipedJobsString = localStorage.getItem('swipedJobs') || JSON.stringify(defaultSwipedJobs);
    const savedSwipedJobs = JSON.parse(savedSwipedJobsString);
    setSwipedJobs(savedSwipedJobs);
  }, []);

  const handleSwipeLeft = (swipedJob: any) => {
    // Handle swiping left, update state accordingly
    let newIndex = currentProfileIndex - 1;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentProfileIndex(newIndex);

    const newSwipedJobs: SwipedJobs = {
      left: [...swipedJobs.left, swipedJob],
      right: [...swipedJobs.right],
    }

    // Update the local state
    setSwipedJobs(newSwipedJobs);

    // Save to local storage
    localStorage.setItem('swipedJobs', JSON.stringify(swipedJobs));
  };

  const handleSwipeRight = (swipedJob: any) => {
    // Handle swiping right, update state accordingly
    let newIndex = (currentProfileIndex + 1) % profiles.length;
    setCurrentProfileIndex(newIndex);

    const newSwipedJobs: SwipedJobs = {
      left: [...swipedJobs.left],
      right: [...swipedJobs.right, swipedJob],
    }

    // Update the local state
    setSwipedJobs(newSwipedJobs);

    // Save to local storage
    localStorage.setItem('swipedJobs', JSON.stringify(swipedJobs));
    
  };

  return (
    <div className="tinder-page">
      {profiles.length > 0 && currentProfileIndex < profiles.length && (
        <Card
          key={profiles[currentProfileIndex].id}
          job={profiles[currentProfileIndex]}
          onSwipeLeft={(job: any) => handleSwipeLeft(job)}
          onSwipeRight={handleSwipeRight}
        />
      )}
      {currentProfileIndex >= profiles.length && <p>No more profiles to show.</p>}
    </div>
  );
};

export default TinderPage;
