import { useEffect, useState} from "react";
import React from 'react';
import ImageGallery from 'react-image-gallery';
import spinner from "../../images/gallery/loading.gif";
import "./image-gallery.css";
import s from "./Modal.module.css";

const items = [{
  original: require("../../images/cases/cases1.jpg"),
  loading: "eager"
  },
  {
    original: require("../../images/cases/cases2.jpg"),
  loading: "eager"
  },
{
    original: require("../../images/cases/cases3.jpg"),
  loading: "eager"
  },
{
    original: require("../../images/cases/cases4.jpg"),
  loading: "eager"
  },
{
    original: require("../../images/cases/cases5.jpg"),
  loading: "eager"
  },
{
    original: require("../../images/cases/cases6.jpg"),
  loading: "eager"
  }];

export default function ModalWindow({ onClose, index}) {

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

  const [load, setLoad] = useState(false)
  
    return (
        <div className={s.overlay} onClick={handleBackdropClick}>
        <div className={s.modal}>
          {!load && <img src={spinner} alt="loading..." />}
          <ImageGallery
            items={items}
            lazyLoad={true}
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={index}
            onImageLoad={() => { setLoad(true) }} />
          <button type="button" className={s.btn}><img src={require("../../images/gallery/close.png")} alt="close" onClick={handleClose}/></button>
        </div>
      </div>
    );
}