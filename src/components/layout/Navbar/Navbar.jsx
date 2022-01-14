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
import RsvpModal from '../../RsvpModal';

const NAVBAR_ITEMS = [
  { id: 0, name: 'WHEN & WHERE', link: 'when-and-where' },
  { id: 1, name: 'OUR GALLERY', link: 'our-gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <TabletUpNav onOpen={onOpen} />
      </Flex>
      <Flex display={{ base: 'flex', md: 'none' }} width={'100%'}>
        <MobileNav onOpen={onOpen} />
      </Flex>

      <RsvpModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

function MobileNav(props) {
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

      <ButtonRsvp onOpen={props.onOpen} />

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

function TabletUpNav(props) {
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

      <ButtonRsvp onOpen={props.onOpen} />
    </Container>
  );
}

function ButtonRsvp(props) {
  return (
    <Button className="btn-rsvp" variant="outline" onClick={props.onOpen}>
      RSVP
    </Button>
  );
}
