import { useState, useEffect } from "react";
import Modal from "./Modal";
import s from "./Cases.module.css"


const items = [
    <img src={require("../../images/cases/cases1.jpg")} alt="img1"  className={s.img} />,
    <img src={require("../../images/cases/cases2.jpg")} alt="img2" className={s.img} />,
    <img src={require("../../images/cases/cases3.jpg")} alt="img3" className={s.img} />,
    <img src={require("../../images/cases/cases4.jpg")} alt="img4" className={s.img} />,
    <img src={require("../../images/cases/cases5.jpg")} alt="img5" className={s.img} />,
    <img src={require("../../images/cases/cases6.jpg")} alt="img6"  className={s.img} />]

const Cases = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

    return (
        <div className={s.container} id="cases">
            <h3 className={s.subtitle}>This is what we do</h3>
            <h2 className={s.title}>Business Cases</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={s.list} onClick={toggleModal}>
                    {items.map((item) => (
                        <li key={items.indexOf(item)} >{item}</li>
                    ))}
            </ul>
            {showModal && (
        <Modal onClose={toggleModal} />
      )} 
        </div>
    )
 };

export default Cases;