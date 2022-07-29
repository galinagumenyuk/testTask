import React from "react";
import s from "./Contact.module.css";
import Form from "./Form";

const Contact = () => { 
    return (
        <div className={s.container} id="contact">
            <img src={require("../../images/home/contact.jpg")} alt="laptop" className={s.image}></img>
            <Form />
        </div>
    )
};

export default Contact;