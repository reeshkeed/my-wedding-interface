import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  return (
    <Center id="home" className="flex-column">
      <p className="font-cormorant">We're Getting Married!</p>
      <Box my={20}>
        <h1 className="our-name font-amalfi">Shane & Girish</h1>
      </Box>
      <p>1.30.22</p>
    </Center>
  );
};

export default Home;
