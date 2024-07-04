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
                        <span className="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                        <span className="student-name">Jane Smith</span>
                        <span className="student-college">XYZ College</span>
                    </div>
                    <div className="swiper-slide card">
                        <span className="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                        <span className="student-name">Alice Johnson</span>
                        <span className="student-college">PQR Institute</span>
                    </div>
                    <div className="swiper-slide card">
                        <span className="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                        <span className="student-name">John Doe</span>
                        <span className="student-college">ABC University</span>
                    </div>
                    <div className="swiper-slide card">
                        <span className="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                        <span className="student-name">Mary Brown</span>
                        <span className="student-college">LMN College</span>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
}

export default What;
