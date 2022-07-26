import { useEffect} from "react";
import s from "./Modal.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={require("../../images/cases/cases1.jpg")} alt="img1"  onDragStart={handleDragStart} className={s.img}/>,
    <img src={require("../../images/cases/cases2.jpg")} alt="img2" onDragStart={handleDragStart} className={s.img}/>,
    <img src={require("../../images/cases/cases3.jpg")} alt="img3" onDragStart={handleDragStart} className={s.img}/>,
    <img src={require("../../images/cases/cases4.jpg")} alt="img4" onDragStart={handleDragStart} className={s.img}/>,
    <img src={require("../../images/cases/cases5.jpg")} alt="img5" onDragStart={handleDragStart} className={s.img}/>,
    <img src={require("../../images/cases/cases6.jpg")} alt="img6"  onDragStart={handleDragStart} className={s.img}/>]

export default function ModalWindow({ onClose}) {

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
    onClose();
    }
  };

   const handleKeydown = (e) => {
    if (e.code === "Escape") {
    onClose();
    }
    };
    const handleClose = () => { onClose() };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {window.removeEventListener("keydown",handleKeydown)}
  })

    return (
        <div className={s.overlay} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <AliceCarousel mouseTracking items={items} />
                <button type="button" className={s.btn}><img src={require("../../images/gallery/close.png")} alt="close" onClick={handleClose}/></button>
        </div>
      </div>
    );
}