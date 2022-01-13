import {
  Button,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Image,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import './Navbar.css';

const NAVBAR_ITEMS = [
  { id: 0, name: 'WHEN & WHERE', link: 'when-and-where' },
  { id: 1, name: 'OUR GALLERY', link: 'our-gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container
      py={{ base: '1rem', md: '2rem' }}
      px={{ base: '0.5rem', md: '3rem' }}
      bgGradient={isScrolled ? 'linear(to-r, teal.300, blue.400)' : ''}
      position={'fixed'}
      width={'100%'}
      maxW={'none'}
      zIndex={'10'}
    >
      <Flex display={{ base: 'none', md: 'flex' }} width={'100%'}>
        <TabletUpNav />
      </Flex>
      <Flex display={{ base: 'flex', md: 'none' }} width={'100%'}>
        <MobileNav />
      </Flex>
    </Container>
  );
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      justifyContent={'space-between'}
      display={'flex'}
      width={'100%'}
      maxW={'none'}
    >
      <Button colorScheme="white" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Link className="nav-link" to="home" spy={true} smooth={true}>
        <Image className="logo" src={logo} />
      </Link>

      <ButtonRsvp />

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box
              pb={'1rem'}
              display={'flex'}
              flexDirection={{ base: 'column' }}
            >
              <Box pb={'0.4rem'}>
                <Link to="home" spy={true} smooth={true}>
                  HOME
                </Link>
              </Box>
              {NAVBAR_ITEMS.map((item) => {
                return (
                  <Box pb={'0.4rem'} key={item.id}>
                    <Link to={item.link} spy={true} smooth={true}>
                      {item.name}
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}

function TabletUpNav() {
  return (
    <Container
      justifyContent={'space-between'}
      alignItems={'center'}
      display={'flex'}
      width={'100%'}
      maxW={'none'}
    >
      <Box
        className="d-flex v-center"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Link className="nav-link" to="home" spy={true} smooth={true}>
          <Image className="logo" src={logo} />
        </Link>

        {NAVBAR_ITEMS.map((item) => {
          return (
            <Link
              className="nav-link"
              key={item.id}
              to={item.link}
              spy={true}
              smooth={true}
            >
              {item.name}
            </Link>
          );
        })}
      </Box>

      <ButtonRsvp />
    </Container>
  );
}

function ButtonRsvp() {
  return (
    <Button className="btn-rsvp" variant="outline">
      RSVP
    </Button>
  );
}
