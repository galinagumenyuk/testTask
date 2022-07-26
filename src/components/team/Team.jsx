import react from "react";
import s from "./Team.module.css";

const Team = () => {
    return (
        <div className={s.container}>
            <h3 className={s.subtitle}>Who we are</h3>
            <h2 className={s.title}>Our Professional Team</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={s.wrapper}>
                <li>
                    <img src={require("../../images/team/person1.jpg")} alt="person" className={s.img}></img>
                    <p className={s.mainLabel}>John Doe</p>
                    <p className={s.label}>President</p>
                </li>
                <li>
                    <img src={require("../../images/team/person2.jpg")} alt="person" className={s.img}></img>
                    <p className={s.mainLabel}>Jane Doe</p>
                    <p className={s.label}>Vice  President</p>
                </li>
                <li>
                    <img src={require("../../images/team/person3.jpg")} alt="person" className={s.img}></img>
                    <p className={s.mainLabel}>Steve Smith</p>
                    <p className={s.label}>Marketing Head</p>
                </li>
           </ul>
        </div>
    )
 };

export default Team;