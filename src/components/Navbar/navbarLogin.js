
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import ModalLogin from '../form/modalLogin';
import ModalRegister from '../form/modalRegister';

import Logo from '../images/logo.png'
import Stack from 'react-bootstrap/Stack';
import Ellipse from "../images/Ellipse1.png"

import { UserContext } from '../../context/userContext';
import { useQuery } from 'react-query';
import { API } from "../../config/api";






function NavLog() {

  const { data: checkAuth } = useQuery('checkAuthChace', async () => {
    const response = await API.get('/check-auth');
    console.log("check auth : ", response?.data.Data)
    return response?.data.Data
  })
  const auth = localStorage.getItem("admin")

  const [_, dispatch] = useContext(UserContext)

  const [isLogin, setIsLogin] = useState(false);
  const [register, setRegister] = useState(false)
  const [changeNav, setChangeNav] = useState(false)

  const NavIcon = () => { setChangeNav(true) }
  const NavLogin = () => { setChangeNav(false) }

  const ModalShowLogin = () => { setIsLogin(true); }
  const ModalOutLogin = () => { setIsLogin(false) }

  const ModalShowReg = () => { setRegister(true) }
  const ModalOutReg = () => { setRegister(false) }

  function logOut() {
    localStorage.removeItem("admin")
    localStorage.removeItem("user")
    dispatch({
      type: "LOGOUT",
      payload: {},
    })
    window.location.href = "/"
  }

  return (
    <Navbar className='bgNav'>
      <Container>
        <a href='/'>

          <Image className='logo' src={Logo} />
        </a>
        <Navbar.Collapse className="justify-content-end" >
          {auth === "isAdmin" || auth === "noAdmin" ? (

            <Stack direction="horizontal" gap={3}>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ border: "none" }}>
                  {/* <Image src={icon} /> */}
                  <Image src={Ellipse} />

                </Dropdown.Toggle>

                {auth === "noAdmin" ? (

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu>
                    <Dropdown.Item href="/income-trip">Trip</Dropdown.Item>
                    <Dropdown.Item href="/list-transaction">List Transaction</Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>

                )}

              </Dropdown>
            </Stack>
          ) : (
            <Stack direction="horizontal" gap={3}>
              <Button className='bt-transparant btn-size button-nav' onClick={ModalShowLogin}>   Login   </Button>{' '}
              <Button variant="warning" className='button-nav' style={{ color: "white" }} onClick={ModalShowReg}>Register</Button>{' '}
            </Stack>
          )}


        </Navbar.Collapse>
      </Container>
      <ModalLogin outModal={ModalOutLogin} showModal={isLogin} chgNavbar={NavIcon} />
      <ModalRegister outModal={ModalOutReg} show={register} inLogin={ModalShowLogin} />
    </Navbar>
  );
}

export default NavLog;