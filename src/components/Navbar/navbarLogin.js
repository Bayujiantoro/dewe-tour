
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { useState , useContext } from 'react';
import ModalLogin from '../form/modalLogin';
import ModalRegister from '../form/modalRegister';

import Logo from '../images/logo.png'
import Stack from 'react-bootstrap/Stack';
import Ellipse from "../images/Ellipse1.png"

import { UserContext } from '../../context/userContext';





function NavLog() {

  const auth = localStorage.getItem('admin')

  const [_, dispatch] = useContext(UserContext)

  const [isLogin, setIsLogin] = useState(false);
  const [register, setRegister] = useState(false)
  const [changeNav, setChangeNav] = useState(false)

  const NavIcon = () => { setChangeNav(true) }
  const NavLogin = () => { setChangeNav(false)  }
  
  const ModalShowLogin = () => { setIsLogin(true);}
  const ModalOutLogin = () => { setIsLogin(false) }

  const ModalShowReg = () => { setRegister(true)}
  const ModalOutReg = () => { setRegister(false)}

  function logOut(){
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

        <Image src={Logo} />
        </a>
        <Navbar.Collapse className="justify-content-end" >
          { auth === "noAdmin" || auth === "isAdmin" ? (

          <Stack direction="horizontal" gap={3}>
          <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none"}}>
                {/* <Image src={icon} /> */}
                <Image src={Ellipse} />
              
              </Dropdown.Toggle>

              {auth === "noAdmin" ? (
                
              <Dropdown.Menu>
                <Dropdown.Item href="/profile/1/1">Profile</Dropdown.Item>
                <Dropdown.Item href="">Pay</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={logOut}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
              ):(
              <Dropdown.Menu>
                <Dropdown.Item href="/income-trip">Trip</Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
              </Dropdown.Menu>

              )}
        
            </Dropdown>
          </Stack>
          ): (
            <Stack direction="horizontal" gap={3}>
              <Button className='bt-transparant btn-size' onClick={ModalShowLogin}>   Login   </Button>{' '}
              <Button variant="warning" style={{ color: "white" }} onClick={ModalShowReg}>Register</Button>{' '}
            </Stack>
          )}
          

        </Navbar.Collapse>
      </Container>
      <ModalLogin outModal={ModalOutLogin} showModal={isLogin} chgNavbar={NavIcon}/>
      <ModalRegister outModal={ModalOutReg} show={register} inLogin={ModalShowLogin}/>
    </Navbar>
  );
}

export default NavLog;