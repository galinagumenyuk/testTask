import react from "react";
import s from "./Team.module.css";

const Team = () => {
    return (
        <div className={s.container}>
            <h3 className={s.subtitle}>Who we are</h3>
            <h2 className={s.title}>Our Professional Team</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </div>
    )
 };

export default Team;