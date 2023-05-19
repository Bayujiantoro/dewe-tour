import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

function ModalLogin({outModal,showModal,chgNavbar}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("sdafetwqtre")

    console.log(e)
    chgNavbar()
    outModal()
    
  }
  
  

  return (
    <>

      <Modal
        show={showModal}
        onHide={outModal}
        backdrop="static"
        keyboard={true}
        
        
      >

        <Modal.Body style={{width:"90%"}} className='m-auto' >
        
          <Form onSubmit={HandleSubmit}>
          <div className='mt-5 fs-1 fw-bold'>
            <p className='text-center'> Login </p>

          </div>

          <label className='fs-4 fw-bold'>Login</label >
          <Form.Control type="email" style={{ height: "45px" }} name='email' value={data.email} onChange={handleOnChange}/>

          <label className='fs-4 fw-bold mt-5'>Password</label >
          <Form.Control type="password" style={{ height: "45px", marginBottom: "30px", }} />

          <button type="submit" className="btn btn-orange" style={{ borderRadius: "3px", width: "100%" }}> LOGIN </button>
          <p className='text-center mt-3' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;