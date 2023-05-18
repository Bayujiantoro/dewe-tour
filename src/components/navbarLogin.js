
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

import Logo from '../images/logo.png'
import Stack from 'react-bootstrap/Stack';
import Ellipse from "../images/Ellipse1.png"



function NavLog() {
  return (
    <Navbar className='bgNav'>
      <Container>
        <Image src={Logo} />
        <Navbar.Collapse className="justify-content-end" >
          <Stack direction="horizontal" gap={3}>
          <Image src={Ellipse} />
          </Stack>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLog;