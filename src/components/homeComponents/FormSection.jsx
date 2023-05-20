import React from "react";

import '../../styles/homeStyles/homeStyles.css';
import Logo from '../../assets/img/logo.png';
import Form from 'react-bootstrap/Form';




export default function FormSection() {
   
    return(
      <>
        <div className="form-section" id="contact">
          <div className="form-box">
          <Form className="form-msg">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <button className="btn btn-info btn-msg" type="submit"><i class="fa-solid fa-paper-plane"></i> Enviar</button>
            </Form.Group>
          </Form>
          <div className="form-title">
            
            <img className="logo-msg" src={Logo} alt="Kool Frenzy Logo" />
            <h4>Estamos esperando tu mensaje...</h4>
            
            <div className="social-box">
              <h6>O Seguinos en nuestras Redes Sociales</h6>
              <div className="social-links">
               <a href=""><i class="fa-brands fa-instagram"></i></a>
               <a href=""><i class="fa-brands fa-facebook"></i></a>
               <a href=""><i class="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </div>
         </div>
        </div>
      </>
    )
  }