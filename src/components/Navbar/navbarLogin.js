
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';


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
          <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none"}}>
                {/* <Image src={icon} /> */}
          <Image src={Ellipse} />
              
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pay</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLog;