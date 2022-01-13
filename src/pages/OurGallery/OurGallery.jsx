import { Heading, Text, Center, Grid, GridItem } from '@chakra-ui/react';

function OurGallery() {
  return (
    <Center id="our-gallery">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
      >
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'blue.400',
            zIndex: -1,
          }}
        >
          Our
        </Text>
        <br />
        <Text as={'span'} color={'blue.400'}>
          Gallery
        </Text>
      </Heading>
    </Center>
  );
}

export default OurGallery;
