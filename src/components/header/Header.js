import React from "react";
import "../../scss/header.scss"
import Container from "./Container";
import Contacts from "./Сontacts";

function Header() {
    return <section id="main" className="header h-screen">
        <div className="h-20"/>
        <Container/>
        <Contacts/>
    </section>
}

export default Header