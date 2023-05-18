import React from "react";
import Header from "../components/homeComponents/Header";
import SearchSection from "../components/homeComponents/SearchSection";
import MidSection from "../components/homeComponents/MidSection";
import ProductSection from "../components/homeComponents/ProductSection";
import FormSection from "../components/homeComponents/FormSection";

export default function Home() {
    return(
        <>
        <Header/>
        <SearchSection/>
        <MidSection/>
        <ProductSection/>
        <FormSection/>
        </>
    )
}