import React from "react";
import s from "./About.module.css";




const About = () => { 
    return (
        <div>
            <img src={require("../../images/home/people.jpg")} alt="people"
                srcSet={require("../../images/home/people@2x.jpg")}
                className={s.img} /> 
            <div className={s.wrapper}>
                <h3 className={s.subtitle}>What you are looking for</h3>
                <h2 className={s.title}>We provide bespoke solutions</h2>
                <p className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={s.button}>Read More</button>
            </div>
       </div>
)
}

export default About;
