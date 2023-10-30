import React from "react";
import '../../Asset/css/main.css'
import { Navbar } from "../Navbar/Navbar";
import {Product} from "./Middle/Product";
import { About } from "./Middle/About";
import { Company } from "./Middle/Compay";
import { Footer } from "./Middle/Footer";
import { Cards } from "./Middle/Card";
import { Contact } from "./Middle/Contact";





export const Home =()=>{
    return(
        <>
        {/* <Navbar/> */}
        <Product />
        
        <Cards />
        <About />
        <Company />
        <Contact />
        <Footer />
        
        </>
    )
}