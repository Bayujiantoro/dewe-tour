
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Logo from '../images/logo.png'
import Stack from 'react-bootstrap/Stack';



function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Image src={Logo} />
        <Navbar.Collapse className="justify-content-end" >
          <Stack direction="horizontal" gap={3}>
          <Button className='bt-transparant btn-size'>   Login   </Button>{' '}
          <Button variant="warning">Register</Button>{' '}
          </Stack>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;