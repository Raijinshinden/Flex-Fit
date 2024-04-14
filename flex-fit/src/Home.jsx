import { useState } from "react";

import womanStretch from "./assets/images/gym/woman-stretch.webp";
import womanBarbell from "./assets/images/gym/woman-barbell.webp";
import manRopes from "./assets/images/gym/man-ropes.jpeg"

const carouselImg = [womanStretch, womanBarbell, manRopes];



function ImageSlider({imageUrls}){

}

export default function Home(){
    return(
            <section id="/">
                <div className="hero-container">
                    <div className="hero-img-container">
                    <p className="hero-text">Join our gym if you want to become  </p>
                    </div>
                </div>
            </section>
    )
}