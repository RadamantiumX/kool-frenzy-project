import React from "react";

import '../../styles/homeStyles/homeStyles.css';
import Logo from '../../assets/img/logo.png';
import Form from 'react-bootstrap/Form';




export default function FormSection() {
   
    return(
      <>
        <div className="form-section">
          <div className="form-box">
          <Form className="form-msg">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <button className="btn btn-warning btn-msg"><i class="fa-solid fa-paper-plane"></i> Enviar</button>
            </Form.Group>
          </Form>
          <div className="form-title">
            <img className="logo-msg" src={Logo} alt="Kool Frenzy Logo" />
            <h4>Podes ponerte en contacto con nosotros, no lo dudes...</h4>
            <p><i className="fa-solid fa-phone"></i> 1536397895</p>
            <p><i class="fa-solid fa-envelope"></i> ventas@kool-frenzy.com</p>
          </div>
         </div>
        </div>
      </>
    )
  }