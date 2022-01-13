import { Box, Center, Text } from '@chakra-ui/react';

function DateVenue() {
  return (
    <Center
      fontSize={{ base: '1rem', md: '1.5rem' }}
      letterSpacing={'0.3rem'}
      fontWeight={'200'}
      py={{ base: '2rem', md: '2.5rem' }}
    >
      <Box
        borderY={'1px solid #50bea3'}
        px={{ base: '1.3rem', md: '2rem' }}
        py={{ base: '0.3rem', md: '0.5rem' }}
      >
        <Text>SUNDAY</Text>
      </Box>
      <Center display={'flex'} flexDirection={'column'} mx={'1rem'}>
        <Text>JAN</Text>
        <Text fontSize={{ base: '1.6rem', md: '3rem' }} fontWeight={'700'}>
          30
        </Text>
        <Text>2022</Text>
      </Center>
      <Box
        borderY={'1px solid #50bea3'}
        px={{ base: '1.3rem', md: '2rem' }}
        py={{ base: '0.3rem', md: '0.5rem' }}
      >
        <Text>4:00 PM</Text>
      </Box>
    </Center>
  );
}

export default DateVenue;
