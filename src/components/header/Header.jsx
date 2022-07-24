import React from "react";
import cx from 'classnames'
import Svg from "./Svg";

import s from "./Header.module.css";

const Header = () => { 
    return (
        <div className={s.container}>
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
       
    )
}

export default Header;