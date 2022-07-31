import s from "./Team.module.css";
import {HandySvg} from 'handy-svg';
import iconLinkedin from '../../images/svg/linked.svg';
import iconFB from "../../images/svg/facebook.svg";
import iconYoutube from "../../images/svg/youtube.svg";
import iconTw from "../../images/svg/tw.svg";
import person1JPG from "../../images/team/person1.jpg";
import person1JPGRetina from "../../images/team/person1@2x.jpg";
import person1WEBP from "../../images/team/person1.webp";
import person1WEBPRetina from "../../images/team/person1@2x.webp";
import person2JPG from "../../images/team/person2.jpg";
import person2JPGRetina from "../../images/team/person2@2x.jpg";
import person2WEBP from "../../images/team/person2.webp";
import person2WEBPRetina from "../../images/team/person2@2x.webp";
import person3JPG from "../../images/team/person3.jpg";
import person3JPGRetina from "../../images/team/person3@2x.jpg";
import person3WEBP from "../../images/team/person3.webp";
import person3WEBPRetina from "../../images/team/person3@2x.webp";

const Team = () => {
    return (
        <div className={s.container}>
            <h3 className={s.subtitle}>Who we are</h3>
            <h2 className={s.title}>Our Professional Team</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={s.wrapper}>
                <li>
                    <div className={s.imgWrapper}>
                        <img
                        src={person1WEBP}
                        srcSet={`${person1WEBPRetina} 2x, ${person1JPG}, ${person1JPGRetina} 2x`}
                            alt="person1"
                        className={s.img}/>
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
                       <img
                        src={person2WEBP}
                        srcSet={`${person2WEBPRetina} 2x, ${person2JPG}, ${person2JPGRetina} 2x`}
                        alt="person2"
                        className={s.img}/>
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
                       <img
                        src={person3WEBP}
                        srcSet={`${person3WEBPRetina} 2x, ${person3JPG}, ${person3JPGRetina} 2x`}
                        alt="person3"
                        className={s.img}/>
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