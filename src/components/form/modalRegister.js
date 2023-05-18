
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

function ModalRegister(props) {
  

  return (
    <>

      <Modal
        show={props.show}
        onHide={props.out}
        backdrop="static"
        keyboard={false}
        
      >

        <Modal.Body style={{width:"90%"}} className='m-auto'>
          <div className='mt-5 fs-2 fw-bold'>
            <p className='text-center'> Register </p>

          </div>
          <label className='fs-5 fw-bold'>Full Name</label >
          <Form.Control type="text" style={{ height: "45px" }} />

          <label className='fs-5 fw-bold mt-3'>Email</label >
          <Form.Control type="email" style={{ height: "45px" }} />

          <label className='fs-5 fw-bold mt-3'>Password</label >
          <Form.Control type="password" style={{ height: "45px" }} />

          <label className='fs-5 fw-bold mt-3'>Phone Number</label >
          <Form.Control type="number" style={{ height: "45px", marginBottom: "30px", }} />

          <button type="button" className="btn btn-orange" style={{ borderRadius: "3px", width: "100%" }} onClick={props.out}> LOGIN </button>
          <p className='text-center mt-3' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;