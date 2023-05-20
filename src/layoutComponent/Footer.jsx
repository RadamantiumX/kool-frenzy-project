import React from "react";
import Logo from '../assets/img/logo_terminado.png';
import '../styles/footerStyles/footerStyles.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return(
        
        <>
          <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted py-10'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Logo} alt="Kool frenzy Logo Footer" className="logo-footer"/>
                Kool-Frenzy
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Secciones</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Productos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Categorías
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Personalizados
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hablemos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legales</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Privacidad
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Términos y condiciones
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className='text-reset fw-bold'>
        © 2023 Copyright:
        
          Kool-Frenzy | Design by <a href="">Epsiweb</a>
        </p>
      </div>
    </MDBFooter>
      

     
        </>
        
        )
    }