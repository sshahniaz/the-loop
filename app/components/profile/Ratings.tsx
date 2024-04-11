import { fetchRatings } from '@/app/actions/ProfilePageActions';
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Ratings = (id: string) => {
  const [ratings, setRatings] = useState<number>();
  
  useEffect(() => {
    const getRatings = async () => {
      
      const data = await fetchRatings(id);
      if (data !== null) {
        const { stars } = data;
        console.log(data);
        setRatings(stars);
      }
    };
    getRatings();
  }
  , []);


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={ratings} readOnly />
    </Box>
  )
}

export default Ratings