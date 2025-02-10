import exploreImg1 from "../assets/images/section/location-9.jpg";
import exploreImg2 from "../assets/images/section/location-10.jpg";
import exploreImg3 from "../assets/images/section/location-11.jpg";
import exploreImg4 from "../assets/images/section/location-12.jpg";
import exploreImg5 from "../assets/images/section/location-13.jpg";
import exploreImg6 from "../assets/images/section/location-14.jpg";
import exploreImg7 from "../assets/images/section/location-15.jpg";

export default function ExploreSection() {
  return (
    <>
      <section className="section-neighborhoods">
        <div className="tf-container full">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title text-anime-wave">
                Explore The Neighborhoods
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Find your dream apartment with our listing
              </p>
            </div>
            <div className="wrap-neighborhoods">
              <div className="box-location hover-img item-1">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg1}
                      src={exploreImg1}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Banjarahills</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white  tf-btn style-border pd-23"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-2">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg2}
                      src={exploreImg2}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Jublie Hills</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-3">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg3}
                      src={exploreImg3}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Hitech City</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-4">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg4}
                      src={exploreImg4}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Khajaguda</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-5">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg5}
                      src={exploreImg5}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Gachibowli</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-6">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg6}
                      src={exploreImg6}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Mehdipatnam</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="box-location hover-img item-7">
                <div className="image-wrap">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src={exploreImg7}
                      src={exploreImg7}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <h6 className="text-white">Ameerpet</h6>
                  <a
                    href="#"
                    className="text-1 tf-btn style-border pd-23 text-white"
                  >
                    2.491 Properties <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
