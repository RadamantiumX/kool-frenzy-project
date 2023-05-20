import React from "react";
import Buzo from '../../assets/img/buzo.png';
import Remera from '../../assets/img/t-shirt.png';
import { Link } from "react-router-dom";

export default function ProductSection() {
    return(
        <>
        <div className="product-section">
        <div className="product-title">
                <h5>
                    Tenemos lo que buscas en...
                </h5>
            </div>
            
            <div className="product-box">

                <Link to="/results">
                <div className="inner-box-product">
                    <img src={Remera} alt="Remera Kool frenzy" />
                    <h4>Remeras</h4>
                </div>
                </Link>

                <Link to="/results">
                <div className="inner-box-product">
                    <img src={Buzo} alt="Buzo Kool Frenzy" />
                    <h4>Buzos</h4>
                </div>
                </Link>

            </div>
            
        </div>
        </>
    )
}