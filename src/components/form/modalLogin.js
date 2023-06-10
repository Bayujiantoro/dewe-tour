import { useState , useContext } from 'react';
import Form from 'react-bootstrap/Form';

import { useMutation } from 'react-query';
import { API , setAuthToken } from '../../config/api';

import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../context/userContext';

function ModalLogin({outModal,showModal,chgNavbar}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [_, dispatch] = useContext(UserContext)


  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      
    });
  }

  const HandleSubmit = useMutation(async (e) => {
    
    try {
      e.preventDefault()
      const response = await API.post("/login", data);
      console.log('Login succes : ', response.data.Data)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.Data
      })
      setAuthToken(localStorage.token)
      localStorage.setItem("user",response.data.Data.name)

      const auth = response.data.Data.role
      alert("Login success")
      chgNavbar()
      if( auth === "admin") {
        localStorage.setItem("admin", "isAdmin")
        
        window.location.href = '/list-transaction';
      } 
      else {
        localStorage.setItem("admin", "noAdmin")
      window.location.reload()
        
      }
      
      setData({
        email: "",
        password: "",
      })

      chgNavbar()
      outModal()
    } catch (error) {
      alert("Login Failed ")
      console.log("login failed : ", error)
    }

  })

  return (
    <>

      <Modal
        show={showModal}
        onHide={outModal}
        backdrop="static"
        keyboard={true}
        
        
      >

        <Modal.Body style={{width:"90%"}} className='m-auto' >
        
          <Form onSubmit={(e) => HandleSubmit.mutate(e)}>
          <div className='mt-5 fs-1 fw-bold'>
            <p className='text-center'> Login </p>

          </div>

          <label className='fs-4 fw-bold'>Login</label >
          <Form.Control type="email" style={{ height: "45px" }} name='email' value={data.email} onChange={handleOnChange} required/>

          <label className='fs-4 fw-bold mt-5'>Password</label >
          <Form.Control type="password" style={{ height: "45px", marginBottom: "30px", }} name='password' value={data.password} onChange={handleOnChange} required />

          <button type="submit" className="btn btn-orange" style={{ borderRadius: "3px", width: "100%" }}> LOGIN </button>
          <p className='text-center mt-3' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;