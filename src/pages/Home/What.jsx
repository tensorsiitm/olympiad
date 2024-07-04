import "./what.css"
import Swiper from 'swiper';
import 'swiper/css';

function What() {
    document.addEventListener('DOMContentLoaded', () => {});
      
    return <>
     <div class="wrapper">
        <div class="swiper card_slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide card">
                    <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                    <span class="student-name">Jane Smith</span>
                    <span class="student-college">XYZ College</span>
                </div>
                <div class="swiper-slide card">
                    <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                    <span class="student-name">Alice Johnson</span>
                    <span class="student-college">PQR Institute</span>
                </div>
                <div class="swiper-slide card">
                    <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                    <span class="student-name">John Doe</span>
                    <span class="student-college">ABC University</span>
                </div>
                <div class="swiper-slide card">
                    <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
                    <span class="student-name">Mary Brown</span>
                    <span class="student-college">LMN College</span>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script type="text/javascript">
      var swiper = new Swiper(".card_slider", {
        slidesPerView: 3,
        spaceBetween: 20,  
        pagination: {
             el: ".swiper-pagination",
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
    </script>
    
    </>;
}

export default What;