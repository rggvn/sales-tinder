// TinderPage.js
'use client'

import React, { useState } from 'react';
import Card from '../Card'; // Create a Card component for each user profile
import './page.css'; // Import the CSS file

interface Profile {
  id: number;
  name: string;
  bio: string;
  image: string;
}

const sampleProfiles: Profile[] = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'I love hiking and photography.',
    image: '/images/profile1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    bio: 'Passionate about coding and coffee.',
    image: '/images/profile2.jpg',
  },
  // Add more profiles as needed
];

const TinderPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>(sampleProfiles);
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
    let newIndex = (currentProfileIndex + 1) % sampleProfiles.length;
    setCurrentProfileIndex(newIndex);
  };

  return (
    <div className="tinder-page">
      {profiles.length > 0 && currentProfileIndex < profiles.length && (
        <Card
          key={profiles[currentProfileIndex].id}
          profile={profiles[currentProfileIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      )}
      {currentProfileIndex >= profiles.length && <p>No more profiles to show.</p>}
    </div>
  );
};

export default TinderPage;
