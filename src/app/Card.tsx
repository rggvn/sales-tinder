// Card.tsx

import React from 'react';
import './Card.css'; // Import the CSS file

interface CardProps {
  profile: {
    id: number;
    name: string;
    bio: string;
    image: string;
  };
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const Card: React.FC<CardProps> = ({ profile, onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="card">
      <img src={profile.image} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
      <div className="actions">
        <button onClick={onSwipeLeft}>Swipe Left</button>
        <button onClick={onSwipeRight}>Swipe Right</button>
      </div>
    </div>
  );
};

export default Card;
