import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Logo from "../images/logo.png"
import Stack from 'react-bootstrap/Stack';
import icon from "../images/Ellipse1.png"

import ModalLogin from '../form/modalLogin';
import ModalRegister from '../form/modalRegister';






function NavigationBar(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [changeNav, setChangeNav] = useState(false)

  const NavIcon = () => { setChangeNav(true) }
  const NavLogin = () => { setChangeNav(false) }

  const HandleShowLogin = () => { setIsLogin(true);}
  const HandleOutLogin = () => { setIsLogin(false)}



  return (
    <div>
      <Navbar>
        <Container>
          <Image src={Logo} />
          <Navbar.Collapse className="justify-content-end" >

            {!changeNav ? (<Stack direction="horizontal" gap={3}>
              <Button className='bt-transparant btn-size' onClick={HandleShowLogin}>   Login   </Button>{' '}
              <Button variant="warning" style={{ color: "white" }} onClick={props.inReg}>Register</Button>{' '}
            </Stack>) : (
              <Image src={icon} />

            )}



          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalLogin out={HandleOutLogin} show={isLogin} login={HandleShowLogin}/>
      {/* <ModalRegister out={} show={} /> */}
    </div>

  );
}

export default NavigationBar;