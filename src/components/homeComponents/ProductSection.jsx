import React from "react";
import Buzo from '../../assets/img/buzo.png';
import Remera from '../../assets/img/t-shirt.png';


export default function ProductSection() {
    return(
        <>
        <div className="product-section">
        <div className="product-title">
                <h5>
                    Tenemos lo que buscas...
                </h5>
            </div>
            
            <div className="product-box">
                <div className="inner-box-product">
                    <img src={Remera} alt="Remera Kool frenzy" />
                    <h4>Remeras</h4>
                </div>
                <div className="inner-box-product">
                    <img src={Buzo} alt="Buzo Kool Frenzy" />
                    <h4>Buzos</h4>
                </div>
            </div>
            
        </div>
        </>
    )
}