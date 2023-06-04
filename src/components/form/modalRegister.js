import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { useMutation } from 'react-query';
import { API } from '../../config/api';

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

  const HandleSubmit = useMutation(async(e) => {

    try {
      e.preventDefault()

      const response = await API.post("/register", data);
      console.log("register success: ", response)
      alert("register success")
      setData({
        nama : "",
        email: "",
        password: "",
        phone: "",
      })
      inLogin()
      outModal()
    } catch (error) {
      alert("Failed Register !!")
      console.log("registerfailed : ", error);
    }
    // e.preventDefault()
    // console.log(data)

  })

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
          <Form onSubmit={(e)=> HandleSubmit.mutate(e)}>
            <label className='fs-5 fw-bold'>Full Name</label >
            <Form.Control type="text" style={{ height: "45px" }} name='name' onChange={handleOnChange} required/>

            <label className='fs-5 fw-bold mt-3'>Email</label >
            <Form.Control type="email" style={{ height: "45px" }} name='email' onChange={handleOnChange} required/>

            <label className='fs-5 fw-bold mt-3'>Password</label >
            <Form.Control type="password" style={{ height: "45px" }} name='password' onChange={handleOnChange} required/>

            <label className='fs-5 fw-bold mt-3'>Phone Number</label >
            <Form.Control type="number" style={{ height: "45px", marginBottom: "30px", }} name='phone' onChange={handleOnChange} required/>

            <button type="submit" className="btn btn-orange" style={{ borderRadius: "3px", width: "100%" }}> LOGIN </button>
          </Form>

          <p className='text-center mt-3' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;