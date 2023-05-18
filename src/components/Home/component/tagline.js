import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup';



export default function Tagline() {
    return (
        <div>
            <div style={{ width: '80%', margin: "auto", marginTop: "30px" }}>
                <h1 style={{ color: 'white', fontWeight: "800", fontSize: "50px" }}>Explore</h1>
                <h1 style={{ color: 'white', fontWeight: "100", fontSize: "60px" }}>your amazing city together</h1>

            </div>
            <div style={{width: "80%",  margin: 'auto', marginTop: "70px", boxSizing:"border-box", marginBottom:"70px"}}>
                <Form.Label htmlFor="search">Find great places to holliday</Form.Label>
                <InputGroup className="mb-4" style={{height: "50px", outline: "none", border: "none", boxShadow:"gba(100, 100, 111, 0.2) 0px 10px 29px 0px"}}>
                    <Form.Control
                        aria-describedby="basic-addon2"
                    />
                    <Button id="search" style={{backgroundColor: "darkorange", paddingLeft:"25px", paddingRight: "25px", border: "0px", borderRadius:"0 10px 10px 0"}}>Search</Button>
                </InputGroup>
            </div>

        </div >


    )
}