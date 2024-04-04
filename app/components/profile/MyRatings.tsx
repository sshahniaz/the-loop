import React from 'react';

interface MyRatingsProps {
  numberOfStars: number;
}

const MyRatings: React.FC<MyRatingsProps> = ({ numberOfStars }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default MyRatings;