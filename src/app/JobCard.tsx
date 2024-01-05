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
  onSwipeLeft: (job: any) => void;
  onSwipeRight: (job: any) => void;
}

const Card: React.FC<JobCardProps> = ({ job, onSwipeLeft, onSwipeRight }) => {
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const handleSwipe = (direction: string) => {
    setSwipeDirection(direction);

    // You might want to add additional logic here based on the swipe direction
    if (direction === 'left') {
      onSwipeLeft(job);
    } else if (direction === 'right') {
      onSwipeRight(job);
    }
  };

  return (
    <div>
      <div
        className={`job-card ${swipeDirection}`}
        onAnimationEnd={() => setSwipeDirection(null)}
      >
        <img src={job.image} alt={`${job.company} Logo`} className="company-logo" />
        <div className="property">
          <span className="property-name">Job Title:</span>
          <span className="property-value">{job.jobTitle}</span>
        </div>
        <div className="property">
          <span className="property-name">Company:</span>
          <span className="property-value">{job.company}</span>
        </div>
        <div className="property">
          <span className="property-name">Location:</span>
          <span className="property-value">{job.location.city}, {job.location.country}</span>
        </div>
        <div className="property">
          <span className="property-name">Requirements:</span>
          <span className="property-value">{job.requirements}</span>
        </div>
      </div>
      <div className="actions">
          <button className='left' onClick={() => handleSwipe('left')}>Swipe Left</button>
          <button className='right' onClick={() => handleSwipe('right')}>Swipe Right</button>
        </div>
    </div>
  );
};

export default Card;
