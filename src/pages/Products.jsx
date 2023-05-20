import React from "react";
import ProductsHeader from "../components/ProductsComponents/ProductsHeader";
import ProductsBody from "../components/ProductsComponents/ProductsBody";
import FormSection from "../components/homeComponents/FormSection";

//Pagina de todos los productos
export default function Products() {
    return(
        <>
        <ProductsHeader/>
        <ProductsBody/>
        <FormSection/>
        </>
    )
}