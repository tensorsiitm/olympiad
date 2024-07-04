import React, { useEffect } from 'react';
import './what.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function What() {
    useEffect(() => {
        var swiper = new Swiper('.card_slider', {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });
    }, []);

    return (
        <div className="wrapper">
            <div className="swiper card_slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide card">
                        <span className="review">Believe me when I say that Tensors is the best mock exam for JEE aspirants. It gives us a clear cut explanation about how the original exam would be. Through the Tensors exam I was able to judge what would be my stand amongst others in the state in jee</span>
                        <span className="student-name">Lean Jose</span>
                        <span className="student-college">IIT Madras</span>
                    </div>
                    <div className="swiper-slide card">
                        <span className="review">By Tensors, I was able to identify the chinks in my JEE preparation, literally. Tensors is so balanced inspite of being very detailed, that I got the true feel of writing the JEE exams. It developed my confidence and kept the tempo going in the last stages of preparation</span>
                        <span className="student-name">Shafil Maheen</span>
                        <span className="student-college">IISC Bangalore</span>
                    </div>
                    <div className="swiper-slide card">
                        <span className="review">When you take a mock test you expect it to live up to the standards of the original. Tensors, probably because it was made by IITians with an intent to kill, broke that standard. Solving such a paper boosted my confidence due to the simple fact that</span>
                        <span className="student-name">John Doe</span>
                        <span className="student-college">ABC University</span>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
}

export default What;
