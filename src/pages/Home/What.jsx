import "./what.css"
function What() {
    //js code
    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            600: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
      });
      
    return <>
    <div class="wrapper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide card">
            <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
            <span class="student-name">John Doe</span>
            <span class="student-college">ABC University</span>
          </div>
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
            <span class="student-name">Alice Johnson</span>
            <span class="student-college">PQR Institute</span>
          </div>
          <div class="swiper-slide card">
            <span class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veritatis exercitationem excepturi illo repudiandae, similique id et voluptatem.</span>
            <span class="student-name">Alice Johnson</span>
            <span class="student-college">PQR Institute</span>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    
    {/* <script src="script.js" defer></script> */}
    </>;
}

export default What;