import React from 'react';
import Hoc from '../Hoc/Hoc';
import Swal from 'sweetalert2';
import { Form, InputGroup, Input, Button } from 'reactstrap';
import '../Customcss/style.css';


const TextArea = ({ passWord, passHandle }) => {
    

    const CountAlert = () => {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Text max length 150',
          })


    }

    
    return (
        <div className="wrapper">
            <Form className="wrapper-form">
                <InputGroup>
                    <Input type="textarea" className="userMessage" rows="9" onChange={passHandle} maxLength="150" required />
                </InputGroup>
                <span className="countText text-success"><span className="text-danger">{passWord.length}</span>/150</span>
                {passWord.length === 150 ? CountAlert() : null}
                <InputGroup className="mt-2">
                   <Button outline color="success" size="md">Send</Button>
                </InputGroup>
            </Form>
        </div>
    );

}



export default Hoc(TextArea);