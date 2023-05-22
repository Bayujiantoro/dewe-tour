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
import Dropdown from 'react-bootstrap/Dropdown';







function NavigationBar(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [register, setRegister] = useState(false)
  const [changeNav, setChangeNav] = useState(false)

  const NavIcon = () => { setChangeNav(true) }
  const NavLogin = () => { setChangeNav(false) }

  const ModalShowLogin = () => { setIsLogin(true); }
  const ModalOutLogin = () => { setIsLogin(false) }

  const ModalShowReg = () => { setRegister(true) }
  const ModalOutReg = () => { setRegister(false) }

  const auth = localStorage.getItem('admin')

  const logOut = () => {
    NavLogin()
    localStorage.removeItem("admin")
  }
  // console(auth)


  return (
    <div>
      <Navbar>
        <Container>
          <a href='/'>

            <Image src={Logo} />
          </a>
          <Navbar.Collapse className="justify-content-end" >

            {auth === "noAdmin" || auth === "isAdmin" ? (
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ border: "none" }}>
                  <Image src={icon} />

                </Dropdown.Toggle>
                {auth === "noAdmin" ? (

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Pay</Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <div>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Trip</Dropdown.Item>
                      <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>

                  </div>
                )}
              </Dropdown>
            ) : (<Stack direction="horizontal" gap={3}>
              <Button className='bt-transparant btn-size' onClick={ModalShowLogin}>   Login   </Button>{' '}
              <Button variant="warning" style={{ color: "white" }} onClick={ModalShowReg}>Register</Button>{' '}
            </Stack>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalLogin outModal={ModalOutLogin} showModal={isLogin} chgNavbar={NavIcon} />
      <ModalRegister outModal={ModalOutReg} show={register} inLogin={ModalShowLogin} />
    </div>

  );
}

export default NavigationBar;