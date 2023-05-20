import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

function ModalRegister({ show, outModal, inLogin }) {
  const [data, setData] = useState({
    nama: "",
    email: "",
    password: "",
    phone: ""
  })

  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,

    });
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    outModal()
    inLogin()
  }

  return (
    <>

      <Modal
        show={show}
        onHide={outModal}
        backdrop="static"
        keyboard={true}

      >

        <Modal.Body style={{ width: "90%" }} className='m-auto'>
          <div className='mt-5 fs-2 fw-bold'>
            <p className='text-center'> Register </p>

          </div>
          <Form onSubmit={HandleSubmit}>
            <label className='fs-5 fw-bold'>Full Name</label >
            <Form.Control type="text" style={{ height: "45px" }} name='name' onChange={handleOnChange}/>

            <label className='fs-5 fw-bold mt-3'>Email</label >
            <Form.Control type="email" style={{ height: "45px" }} name='email' onChange={handleOnChange}/>

            <label className='fs-5 fw-bold mt-3'>Password</label >
            <Form.Control type="password" style={{ height: "45px" }} name='password' onChange={handleOnChange}/>

            <label className='fs-5 fw-bold mt-3'>Phone Number</label >
            <Form.Control type="number" style={{ height: "45px", marginBottom: "30px", }} name='phone' onChange={handleOnChange}/>

            <button type="submit" className="btn btn-orange" style={{ borderRadius: "3px", width: "100%" }}> LOGIN </button>
          </Form>

          <p className='text-center mt-3' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;