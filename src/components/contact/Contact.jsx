import React from "react";
import s from "./Contact.module.css";
import Form from "./Form";
import jpg from "../../images/home/contact.jpg";
import jpg2 from "../../images/home/contact@2x.jpg";
import webp from "../../images/home/contact.webp";
import webp2 from "../../images/home/contact@2x.webp";

const Contact = () => { 
    return (
        <div className={s.container} id="contact">
            <img
                src={webp}
                srcSet={`${webp2} 2x, ${jpg}, ${jpg2} 2x`}
                alt="person"
                className={s.image}/>
            <Form />
        </div>
    )
};

export default Contact;