import React from "react";
import SvgBtn from "./SvgBtn";
import s from "./Hero.module.css";

const Hero = () => { 
    return (
        <div className={s.container}>
            <h1 className={s.title}>The Sky Is The Limit</h1>
            <h2 className={s.subtitle}>We provide world class financial assistance</h2>
            <button type="button" className={s.button}> <SvgBtn className={s.svgBtn} /> Read More</button>
        </div> 
    )
}

export default Hero;