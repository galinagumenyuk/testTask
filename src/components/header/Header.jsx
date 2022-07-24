import React from "react";
import cx from 'classnames'
import Svg from "./Svg";
import SvgBtn from "./SvgBtn";

import s from "./Header.module.css";

const Header = () => { 
    return (
        <div className={s.container}>
            <div className={s.desktopWrapper}>
                <div className={s.wrapper}>
                    <Svg/>
                    <p className={s.logo}>Finance<span className={cx(s.logo, s.logoActive)}>Ledger</span></p>
                </div>
                <nav>
                    <ul className={ s.list}>
                        <li className={s.items}>
                            <a href="#..." className={s.link}>Home</a>
                        </li>
                        <li className={s.items}>
                            <a href="#..." className={s.link}>About</a>
                        </li>
                        <li className={s.items}>
                            <a href="#..." className={s.link}>Cases</a>
                        </li>
                        <li className={s.items}>
                            <a href="#..." className={s.link}>Blog</a>
                        </li>
                        <li className={s.items}>
                            <a href="#..." className={s.link}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className={s.title}>The Sky Is The Limit</h1>
            <h2 className={s.subtitle}>We provide world class financial assistance</h2>
            <button type="button" className={s.button}> <SvgBtn className={s.svgBtn} /> Read More</button>
        </div> 
    )
}

export default Header;