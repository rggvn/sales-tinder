// Card.tsx

import React, { useState } from 'react';
import './JobCard.css'; // Import the CSS file

interface JobCardProps {
  job: {
    id: string;
    image?: string;
    company: string;
    jobTitle: string;
    requirements: string;
    location: {
      city: string;
      country: string;
    };
  };
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const Card: React.FC<JobCardProps> = ({ job, onSwipeLeft, onSwipeRight }) => {
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const handleSwipe = (direction: string) => {
    setSwipeDirection(direction);

    // You might want to add additional logic here based on the swipe direction
    if (direction === 'left') {
      onSwipeLeft();
    } else if (direction === 'right') {
      onSwipeRight();
    }
  };

  return (
    <div>
      <div
        className={`job-card ${swipeDirection}`}
        onAnimationEnd={() => setSwipeDirection(null)}
      >
        <img src={job.image} alt={`${job.company} Logo`} className="company-logo" />
        <h3>{job.jobTitle}</h3>
        <p>{job.company}</p>
        <p>Location: {job.location.city}, {job.location.country}</p>
        <p>Requirements: {job.requirements}</p>
      </div>
      <div className="actions">
          <button onClick={() => handleSwipe('left')}>Swipe Left</button>
          <button onClick={() => handleSwipe('right')}>Swipe Right</button>
        </div>
    </div>
  );
};

export default Card;
