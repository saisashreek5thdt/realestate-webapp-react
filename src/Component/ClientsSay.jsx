import avatarImg1 from "../assets/images/avatar/testimonials-1.jpg";
import avatarImg2 from "../assets/images/avatar/testimonials-3.jpg";
import avatarImg3 from "../assets/images/avatar/testimonials-2.jpg";

export default function ClientsSay() {
  return (
    <>
      <div className="section-testimonials ">
        <div className="tf-container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <h2 className="title text-anime-wave">What Our Clients Say?</h2>
                <p
                  className="text-1 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Here’s just a few reasons why homeowners are choosing Realty
                  to sell their property.
                </p>
              </div>
              <div
                className="swiper sw-testimonials style-pagination "
                data-preview="3"
                data-tablet="2"
                data-mobile-sm="2"
                data-mobile="1"
                data-space="15"
                data-space-md="30"
                data-space-lg="40"
                data-speed="1000"
              >
                <div className="swiper-wrapper mb-58 ">
                  <div className="swiper-slide">
                    <div className="wg-testimonial style-no-boder text-center">
                      <div className="avatar">
                        <img src={avatarImg1} alt="" />
                      </div>
                      <p className="text-1 description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sagittis, lorem in fringilla feugiat, nisi
                        libero dapibus dui finibus luctus felis augue ac quam.
                        Ut at egestas mauris. Nulla quis laoreet diam
                      </p>
                      <div className="ratings justify-center">
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                      </div>
                      <div className="author">
                        <h6 className="name">
                          <a href="#">Leslie Alexander</a>
                        </h6>
                        <p className="text-9 lh-20">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="wg-testimonial style-no-boder text-center">
                      <div className="avatar">
                        <img src={avatarImg2} alt="" />
                      </div>
                      <p className="text-1 description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sagittis, lorem in fringilla feugiat, nisi
                        libero dapibus dui finibus luctus felis augue ac quam.
                        Ut at egestas mauris. Nulla quis laoreet diam
                      </p>
                      <div className="ratings justify-center">
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                      </div>
                      <div className="author">
                        <h6 className="name">
                          <a href="#">Leslie Alexander</a>
                        </h6>
                        <p className="text-9 lh-20">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="wg-testimonial style-no-boder text-center">
                      <div className="avatar">
                        <img src={avatarImg3} alt="" />
                      </div>
                      <p className="text-1 description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sagittis, lorem in fringilla feugiat, nisi
                        libero dapibus dui finibus luctus felis augue ac quam.
                        Ut at egestas mauris. Nulla quis laoreet diam
                      </p>
                      <div className="ratings justify-center">
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                      </div>
                      <div className="author">
                        <h6 className="name">
                          <a href="#">Leslie Alexander</a>
                        </h6>
                        <p className="text-9 lh-20">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="wg-testimonial style-no-boder text-center">
                      <div className="avatar">
                        <img src={avatarImg2} alt="" />
                      </div>
                      <p className="text-1 description">
                        Sed eget nibh eros. Phasellus pharetra ac leo et auctor.
                        Donec libero dui, blandit id nulla laoreet, pellentesque
                        egestas ante. Etiam mollis tincidunt elit, sit amet
                        sodales tellus finibus ut. Orci varius natoque.
                      </p>
                      <div className="ratings justify-center">
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                      </div>
                      <div className="author">
                        <h6 className="name">
                          <a href="#">Annette Black</a>
                        </h6>
                        <p className="text-9 lh-20">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="wg-testimonial style-no-boder text-center">
                      <div className="avatar">
                        <img src={avatarImg2} alt="" />
                      </div>
                      <p className="text-1 description">
                        Phasellus efficitur dictum urna, non elementum mauris
                        mollis a. Duis lacinia arcu ac lorem ultricies porta.
                        Maecenas eleifend malesuada egestas. In eu eros
                        hendrerit, pharetra justo id, blandit orci.
                      </p>
                      <div className="ratings justify-center">
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                        <i className="icon-start"></i>
                      </div>
                      <div className="author">
                        <h6 className="name">
                          <a href="#">Ronald Richards</a>
                        </h6>
                        <p className="text-9 lh-20">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-wrap-btn">
                  <div className="swiper-button-prev sw-button testimonials-prev">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5"
                        stroke="#5C5E61"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5L5 12L12 19"
                        stroke="#5C5E61"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="sw-pagination sw-pagination-testimonials text-center"></div>
                  <div className="swiper-button-next sw-button testimonials-next">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#5C5E61"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="#5C5E61"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
