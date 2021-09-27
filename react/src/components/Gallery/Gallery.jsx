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
        {
            'image': img1,
            'alt': 'lightbulb'
        },
        {
            'image': img2,
            'alt': 'sunflower'
        },
        {
            'image': img3,
            'alt': 'sunset'
        },
        {
            'image': img4,
            'alt': 'Tsing Ma Bridge'
        },
    ];
    const zoomInProperties = {
        indicators: true,
        scale: 1.4,
        autoplay: true,
    }
    return (
        <>
            <h1 className="title">{t('galleryPage.title')}</h1>
            <div className="gallery">
                <Fade  {...zoomInProperties}>
                    {images.map((each, index) => (
                    <div className="img-container" key={index} >
                        <img className="photo" src={each['image']} alt={each['alt']} />
                    </div>
                    ))}
                </Fade>
            </div>
            <h5 className="gallery-text"><a href="https://instagram.com/sw_share?utm_medium=copy_link" target="_blank" rel='noreferrer noopener'>{t('galleryPage.text')}</a></h5>
        </>
    )
}
