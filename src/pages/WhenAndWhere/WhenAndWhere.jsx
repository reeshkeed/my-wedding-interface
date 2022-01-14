import {
  Center,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

import GoogleMaps from '../../components/GoogleMaps';
import Header from '../../components/Header';
import MapsIcon from '../../assets/gmaps.svg';
import WazeIcon from '../../assets/waze.svg';

const DIRECTION_ITEMS = [
  {
    id: 0,
    name: 'Waze',
    href: 'https://waze.com/ul/hwdwh1xztm',
    icon: WazeIcon,
  },
  {
    id: 1,
    name: 'Maps',
    href: 'https://www.google.com/maps/place/Mi+Casita+Private+Pool+Garden+Resort/@14.8091402,121.0117746,17z/data=!3m1!4b1!4m5!3m4!1s0x3397afeb6629efdb:0xf8a6d455cd4b4368!8m2!3d14.8091164!4d121.0139352',
    icon: MapsIcon,
  },
];

export default function WhenAndWhere() {
  return (
    <Center
      id="when-and-where"
      maxW={'none'}
      px={{ base: '1rem', md: '2rem', lg: '4rem', xl: '6rem', '2xl': '20rem' }}
      height={'100vh'}
    >
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        width={'100%'}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Header firstLine="When and" secondLine="Where" color="teal" />

          <Text color={'gray.500'}>
            Sunday, January 30, 2022 <br />
            Four o'clock in the afternoon
          </Text>
          <Text color={'gray.500'}>
            Mi Casita Private Pool Garden Resort <br />
            (Brgy. San Vicente, Sta. Maria, San Jose del Monte, Bulacan)
          </Text>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'row'}>
            {DIRECTION_ITEMS.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  width={{ base: '100%', md: 'auto' }}
                  isExternal
                >
                  <Button
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    width={{ base: '100%', md: 'auto' }}
                  >
                    <Image
                      height={{ base: '2.5rem' }}
                      src={item.icon}
                      mr={'0.8'}
                    />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </Stack>

          <Text as="i" size={'xs'} color={'gray.300'} mt={'0.5rem !Important'}>
            <InfoOutlineIcon mr={'0.4rem'} />
            Tap the button above for direction.
          </Text>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={{ base: '180%', md: '150%' }}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('teal.50', 'teal.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <GoogleMaps />
          </Box>
        </Flex>
      </Stack>
    </Center>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
