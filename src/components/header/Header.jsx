import React, { useEffect, useState, useRef  } from "react";
import s from "./Header.module.css";
import cx from 'classnames'
import {HandySvg} from 'handy-svg';
import icon from '../../images/svg/fa-solid_book-open.svg';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

   useEffect(() => {
    setHeight(ref.current.clientHeight)
   }) 
    
    useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
            window.pageYOffset > height ? setScrolled(true) : setScrolled(false)
        );
    }
  });

    return (
        <div className={scrolled ? s.scrolled : s.container} ref={ref} >
            <div className={s.wrapper}>
                <HandySvg
                    src={icon}
                    width="39"
                    height="30"
                    />
                <p className={s.logo}>Finance<span className={cx(s.logo, s.logoActive)}>Ledger</span></p>
            </div>
            <nav>
                <ul className={s.list}>
                    <li className={s.items}>
                        <a href="#home" className={s.link}>Home</a>
                    </li>
                    <li className={s.items}>
                        <a href="#about" className={s.link}>About</a>
                    </li>
                    <li className={s.items}>
                        <a href="#cases" className={s.link}>Cases</a>
                    </li>
                    <li className={s.items}>
                        <a href="#blog" className={s.link}>Blog</a>
                    </li>
                    <li className={s.items}>
                        <a href="#contact" className={s.link}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;