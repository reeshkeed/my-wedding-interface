import { Image, Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="d-flex v-center">
        <Link className="nav-link" to="home" spy={true} smooth={true}>
          <Image className="logo" src={logo} />
        </Link>
        <Link className="nav-link" to="when-and-where" spy={true} smooth={true}>
          WHEN & WHERE
        </Link>
        <Link className="nav-link" to="our-gallery" spy={true} smooth={true}>
          OUR GALLERY
        </Link>
      </div>

      <Button className="btn-rsvp" variant="outline">
        RSVP
      </Button>
    </div>
  );
}

export default Navbar;
