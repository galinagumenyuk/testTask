import react from "react";
import s from "./Team.module.css";
import {HandySvg} from 'handy-svg';
import iconLinkedin from '../../images/svg/linked.svg';
import iconFB from "../../images/svg/facebook.svg";
import iconYoutube from "../../images/svg/youtube.svg";
import iconTw from "../../images/svg/tw.svg";

const Team = () => {
    return (
        <div className={s.container}>
            <h3 className={s.subtitle}>Who we are</h3>
            <h2 className={s.title}>Our Professional Team</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={s.wrapper}>
                <li>
                    <div className={s.imgWrapper}>
                        <img src={require("../../images/team/person1.jpg")} alt="person" className={s.img}></img>
                        <div className={s.overlay}>
                            <ul className={s.overlayText}>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconFB}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconTw}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                               <li><a href="#.">
                                    <HandySvg
                                        src={iconYoutube}
                                        width="40"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconLinkedin}
                                        width="31"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <p className={s.mainLabel}>John Doe</p>
                    <p className={s.label}>President</p>
                </li>
                <li>
                  <div className={s.imgWrapper}>
                        <img src={require("../../images/team/person2.jpg")} alt="person" className={s.img}></img>
                        <div className={s.overlay}>
                            <ul className={s.overlayText}>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconFB}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconTw}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                               <li><a href="#.">
                                    <HandySvg
                                        src={iconYoutube}
                                        width="40"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconLinkedin}
                                        width="31"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <p className={s.mainLabel}>Jane Doe</p>
                    <p className={s.label}>Vice  President</p>
                </li>
                <li>
                    <div className={s.imgWrapper}>
                        <img src={require("../../images/team/person3.jpg")} alt="person" className={s.img}></img>
                        <div className={s.overlay}>
                            <ul className={s.overlayText}>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconFB}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconTw}
                                        width="35"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                               <li><a href="#.">
                                    <HandySvg
                                        src={iconYoutube}
                                        width="40"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                                <li><a href="#.">
                                    <HandySvg
                                        src={iconLinkedin}
                                        width="31"
                                        height="35"
                                        className={s.svgIcon}
                                    />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <p className={s.mainLabel}>Steve Smith</p>
                    <p className={s.label}>Marketing Head</p>
                </li>
           </ul>
        </div>
    )
 };

export default Team;