import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  return (
    <Center id="home" className="flex-column">
      <Text
        fontSize={{ base: '1.4rem', md: '1.6rem', lg: '2rem' }}
        fontWeight={400}
        className="font-cormorant"
      >
        We're Getting Married!
      </Text>
      <Box>
        <Text
          className="our-name font-amalfi"
          fontSize={{
            base: '2.1rem',
            md: '2.7rem',
            lg: '3.4rem',
            xl: '4rem',
            '2xl': '5.4rem',
          }}
          my={{
            base: '2rem',
            md: '2.5rem',
            lg: '3.4rem',
            xl: '4rem',
            '2xl': '5.4rem',
          }}
        >
          Shane & Girish
        </Text>
      </Box>
      <Text
        fontSize={{ base: '1.4rem', md: '1.6rem', lg: '2rem' }}
        fontWeight={200}
      >
        1.30.22
      </Text>
    </Center>
  );
};

export default Home;

// import { useState } from 'react';
// function Home() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <div>
//         <span>{bar}</span>
//         {counter % bar > 0 && <span>{bar ** counter}</span>}
//         <span>{counter}</span>
//       </div>
//       <button onClick={() => setCounter((value) => value + 1)}>
//         Click me!
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return <Foo bar={2} />;
// }
