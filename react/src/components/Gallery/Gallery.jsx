import React from 'react'
import { Zoom, Fade } from 'react-slideshow-image';
import { useTranslation } from 'react-i18next';
// import ImageGallery from 'react-image-gallery'
import "./gallery.css";
import img1 from '../../img/lightbulb.jpg'
import img2 from '../../img/sunflower.jpg'
import img3 from '../../img/sunset_back.jpg'
import img4 from '../../img/tm_bridge.jpg'



export default function Gallery() {
    const { t } = useTranslation()
    const images = [
        img1,
        img2,
        img3,
        img4
    ];
    const zoomInProperties = {
        indicators: true,
        // indicators: i => (<div className="indicator">{i + 1}</div>),
        scale: 1.4,
        autoplay: true,
    }
    return (
        <div className="gallery">
            <h1 className="title">{t('galleryPage.title')}</h1>
            <Fade  {...zoomInProperties}>
                {images.map((each, index) => (
                    <div className="img-container" key={index} >
                        <img className="photo" src={each} />
                    </div>
                ))}
            </Fade>
            {/* <img className="photo" src={img1} alt="lightbulb" />
            <img className="photo" src={img2} alt="sunflower" />
            <img className="photo" src={img3} alt="sunset" />
            <img className="photo" src={img4} alt="tsing ma bridge" /> */}

        </div>
    )
}
