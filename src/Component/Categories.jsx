export default function Categories() {
  return (
    <>
      <section className="tf-spacing-1 section-categories pb-0">
        <div className="tf-container">
          <div className="heading-section text-center mb-48">
            <h2 className="title text-anime-wave">Try Searching For</h2>
            <p
              className="text-1 wow animate__fadeInUp animate__animated"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
            >
              Thousands of luxury home enthusiasts just like you have found
              their dream home
            </p>
          </div>
          <div className="wrap-categories-sw">
            <div
              className="swiper tf-sw-categories style-pagination"
              data-preview="6"
              data-tablet="4"
              data-mobile-sm="3"
              data-mobile="2"
              data-space="15"
              data-space-md="30"
              data-space-lg="30"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#" className="categories-item">
                    <div className="icon-box">
                      <i className="icon icon-apartment1"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Apartment</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="categories-item">
                    <div className="icon-box">
                      <i className="icon icon-villa"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Villa</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="categories-item active">
                    <div className="icon-box">
                      <i className="icon icon-studio"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Studio</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="categories-item">
                    <div className="icon-box">
                      <i className="icon icon-office1"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Office</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="categories-item">
                    <div className="icon-box">
                      <i className="icon icon-townhouse"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Townhouse</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="categories-item">
                    <div className="icon-box">
                      <i className="icon icon-commercial"></i>
                    </div>
                    <div className="content text-center">
                      <h5>Commercial</h5>
                      <p className="mt-4 text-1">234 Property</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sw-pagination sw-pagination-category text-center d-lg-none mt-20 d-block"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
