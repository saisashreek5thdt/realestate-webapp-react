import houseImg1 from "../assets/images/section/box-house-list-1.jpg";
import houseImg2 from "../assets/images/section/box-house-list-2.jpg";
import houseImg3 from "../assets/images/section/box-house-list-3.jpg";
import houseImg4 from "../assets/images/section/box-house-list-4.jpg";

export default function HouseListings() {
  return (
    <>
      <section className="section-listing tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <h2 className="title text-anime-wave">Open Houses Listings</h2>
                <p
                  className="text-1 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Thousands of luxury home enthusiasts just like you visit our
                  website.
                </p>
              </div>
              <div
                className="swiper style-pagination tf-sw-mobile"
                data-screen="992"
                data-preview="1"
                data-space="15"
              >
                <div className="swiper-wrapper tf-layout-mobile-lg lg-col-2 ">
                  <div className="swiper-slide">
                    <div className="box-house hover-img style-list ">
                      <div className="image-wrap">
                        <a href="/">
                          <img
                            className="lazyload"
                            data-src={houseImg1}
                            src={houseImg1}
                            alt=""
                          />
                        </a>
                        <ul className="box-tag flex gap-8 ">
                          <li className="flat-tag text-4 bg-main fw-6 text-white">
                            For Sale
                          </li>
                        </ul>
                        <div className="list-btn flex gap-8 ">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save"></i>
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus"></i>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="/">
                            {" "}
                            House Name
                          </a>
                        </h5>
                        <p className="location text-1 line-clamp-1 ">
                          <i className="icon-location"></i> Location Name
                        </p>
                        <ul className="meta-list flex">
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bed"></i>Beds<span>4</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-sqft"></i>Sqft<span>1150</span>
                            </div>
                          </li>
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bath"></i>Baths<span>2</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-garage"></i>Garage
                              <span>2</span>
                            </div>
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">&#8377; 80000</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="/"
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-house hover-img style-list ">
                      <div className="image-wrap">
                        <a href="/">
                          <img
                            className="lazyload"
                            data-src={houseImg2}
                            src={houseImg2}
                            alt=""
                          />
                        </a>
                        <ul className="box-tag flex gap-8 ">
                          <li className="flat-tag text-4 bg-main fw-6 text-white">
                            For Sale
                          </li>
                        </ul>
                        <div className="list-btn flex gap-8 ">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save"></i>
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus"></i>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="/">
                            House Name
                          </a>
                        </h5>
                        <p className="location text-1 line-clamp-1 ">
                          <i className="icon-location"></i> Location Name
                        </p>
                        <ul className="meta-list flex">
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bed"></i>Beds<span>4</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-sqft"></i>Sqft<span>1150</span>
                            </div>
                          </li>
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bath"></i>Baths<span>2</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-garage"></i>Garage
                              <span>2</span>
                            </div>
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">&#8377; 80000</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="/"
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-house hover-img style-list ">
                      <div className="image-wrap">
                        <a href="/">
                          <img
                            className="lazyload"
                            data-src={houseImg3}
                            src={houseImg3}
                            alt=""
                          />
                        </a>
                        <ul className="box-tag flex gap-8 ">
                          <li className="flat-tag text-4 bg-main fw-6 text-white">
                            For Sale
                          </li>
                        </ul>
                        <div className="list-btn flex gap-8 ">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save"></i>
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus"></i>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="/">
                            House Name
                          </a>
                        </h5>
                        <p className="location text-1 line-clamp-1 ">
                          <i className="icon-location"></i> Location Name
                        </p>
                        <ul className="meta-list flex">
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bed"></i>Beds<span>4</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-sqft"></i>Sqft<span>1150</span>
                            </div>
                          </li>
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bath"></i>Baths<span>2</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-garage"></i>Garage
                              <span>2</span>
                            </div>
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">&#8377; 80000</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="/"
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-house hover-img style-list ">
                      <div className="image-wrap">
                        <a href="/">
                          <img
                            className="lazyload"
                            data-src={houseImg4}
                            src={houseImg4}
                            alt=""
                          />
                        </a>
                        <ul className="box-tag flex gap-8 ">
                          <li className="flat-tag text-4 bg-main fw-6 text-white">
                            For Sale
                          </li>
                        </ul>
                        <div className="list-btn flex gap-8 ">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save"></i>
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus"></i>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <a href="/">
                            House Name
                          </a>
                        </h5>
                        <p className="location text-1 line-clamp-1 ">
                          <i className="icon-location"></i> Location Name
                        </p>
                        <ul className="meta-list flex">
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bed"></i>Beds<span>4</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-sqft"></i>Sqft<span>1150</span>
                            </div>
                          </li>
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bath"></i>Baths<span>2</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-garage"></i>Garage
                              <span>2</span>
                            </div>
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">&#8377; 80000</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="/"
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
