import React from "react";
import '../../Asset/css/main.css'

export const Heading=(props)=>{
    return (
        <>
        <div className="flex-heading">
            <div className="main-heading">
            <h1 className="heading-main-h1">{props.name}</h1>
            </div>
        </div>
        </>      
    )
}