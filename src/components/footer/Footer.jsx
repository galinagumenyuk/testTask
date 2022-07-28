import React from "react";
import s from "./Footer.module.css";
import {HandySvg} from 'handy-svg';
import iconLinkedin from '../../images/svg/linked.svg';
import iconFB from "../../images/svg/facebook.svg";
import iconYoutube from "../../images/svg/youtube.svg";
import iconTw from "../../images/svg/tw.svg";

const Footer = () => {
    return (
        <div className={s.container}>
            <ul className={s.list}>
                <li className={s.item}><a href="#.">
                    <HandySvg
                        src={iconFB}
                        width="35"
                        height="35"
                        className={s.svgIcon}
                    />
                </a></li>
                <li className={s.item}><a href="#.">
                    <HandySvg
                        src={iconTw}
                        width="35"
                        height="35"
                        className={s.svgIcon}
                    />
                </a></li>
                <li className={s.item}><a href="#.">
                    <HandySvg
                        src={iconYoutube}
                        width="40"
                        height="35"
                        className={s.svgIcon}
                    />
                </a></li>
                <li className={s.item}><a href="#.">
                    <HandySvg
                        src={iconLinkedin}
                        width="31"
                        height="35"
                        className={s.svgIcon}
                        />
                </a></li>
            </ul>
            <p className={s.text}>Copyright © 2021 - FinanceLedger</p>
        </div>
)
 };

export default Footer;