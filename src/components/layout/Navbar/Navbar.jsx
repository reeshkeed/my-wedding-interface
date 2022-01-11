import { Container, Image, Button, EmailIcon } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import logo from '../../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar d-flex space-between">
      <div className="d-flex">
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
