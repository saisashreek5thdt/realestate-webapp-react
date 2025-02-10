import sliderImg1 from "../assets/images/section/page-title-4.jpg"
import LocationSelect from "./LocationSelect";
import PropertySelect from "./PropertySelect";

export default function PageTitle() {

    const sliderImage = {
        backgroundImage: `url(${sliderImg1})`,
        backgroundSize: "cover"
    }

  return (
    <>
      <div className="page-title home04" style={sliderImage}>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content-inner">
                <div className="heading-title">
                  <h1 className="title">Serving Telangana</h1>
                  <p className="h6 fw-4">Trusted Advisors Delivering Results</p>
                </div>
                <div className="widget-tabs style-1 ">
                  <ul className="widget-menu-tab ">
                    <li className="item-title active">For Rent</li>
                    <li className="item-title">For Sale</li>
                  </ul>
                  <div className="wg-filter">
                    <div className="form-title">
                      <form className="w-full">
                        <fieldset>
                          <input
                            type="text"
                            placeholder="Address, City, ZIP..."
                          />
                        </fieldset>
                      </form>
                      {/* <div className="nice-select" tabIndex="0">
                        <span className="current">Property type</span>
                        <ul className="list">
                          <li data-value="Property Type" data-display="Property Type" className="option selected">
                            Property type
                          </li>
                          <li data-value="bungalow" className="option">
                            Bungalow
                          </li>
                          <li data-value="apartment" className="option">
                            Apartment
                          </li>
                          <li data-value="house" className="option">
                            House
                          </li>
                          <li data-value="smart-home" className="option">
                            Smart Home
                          </li>
                          <li
                            data-value="Single family home"
                            className="option"
                          >
                            Office
                          </li>
                          <li data-value="Multi family home" className="option">
                            Villa
                          </li>
                        </ul>
                      </div> */}
                      <PropertySelect />
                      {/* <div className="nice-select" tabIndex="0">
                        <span className="current">Location</span>
                        <ul className="list">
                          <li data-value="1" className="option">
                            Location
                          </li>
                          <li data-value="2" className="option selected">
                            Texas
                          </li>
                          <li data-value="3" className="option">
                            Florida{" "}
                          </li>
                          <li data-value="4" className="option">
                            New York
                          </li>
                          <li data-value="5" className="option">
                            Illinois
                          </li>
                          <li data-value="6" className="option">
                            Washington
                          </li>
                          <li data-value="7" className="option">
                            Pennsylvania
                          </li>
                          <li data-value="8" className="option">
                            Ohio
                          </li>
                          <li data-value="9" className="option">
                            Georgia
                          </li>
                          <li data-value="10" className="option">
                            North Carolina
                          </li>
                        </ul>
                      </div> */}
                      <LocationSelect />
                      <div className="wrap-btn">
                        {/* <div className="btn-filter show-form">
                          <div className="icons">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 4H14"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 4H3"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 12H12"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 12H3"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 20H16"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 20H3"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 2V6"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 10V14"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 18V22"
                                stroke="#F1913D"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div> */}
                        <a href="#" className="tf-btn bg-color-primary pd-3">
                          Search <i className="icon-MagnifyingGlass fw-6"></i>
                        </a>
                      </div>
                    </div>
                    {/* <div className="wd-search-form">
                      <div className="group-price">
                        <div className="widget-price">
                          <div className="box-title-price">
                            <span className="title-price">Price range</span>
                            <div className="caption-price">
                              <span>from</span>
                              <span
                                className="value fw-6"
                                id="slider-range-value1"
                              ></span>
                              <span>to</span>
                              <span
                                className="value fw-6"
                                id="slider-range-value2"
                              ></span>
                            </div>
                          </div>
                          <div id="slider-range"></div>
                          <div className="slider-labels">
                            <div>
                              <input type="hidden" name="min-value" value="" />
                              <input type="hidden" name="max-value" value="" />
                            </div>
                          </div>
                        </div>
                        <div className="widget-price">
                          <div className="box-title-price">
                            <span className="title-price">Size range</span>
                            <div className="caption-price">
                              <span>from</span>
                              <span
                                className="value fw-6"
                                id="slider-range-value01"
                              ></span>
                              <span>to</span>
                              <span
                                className="value fw-6"
                                id="slider-range-value02"
                              ></span>
                            </div>
                          </div>
                          <div id="slider-range2"></div>
                          <div className="slider-labels">
                            <div>
                              <input type="hidden" name="min-value2" value="" />
                              <input type="hidden" name="max-value2" value="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" group-select">
                        <div className="box-select">
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Province / States</span>
                            <ul className="list">
                              <li data-value="1" className="option">
                                California
                              </li>
                              <li data-value="2" className="option selected">
                                Texas
                              </li>
                              <li data-value="3" className="option">
                                Florida{" "}
                              </li>
                              <li data-value="4" className="option">
                                New York
                              </li>
                              <li data-value="5" className="option">
                                Illinois
                              </li>
                              <li data-value="6" className="option">
                                Washington
                              </li>
                              <li data-value="7" className="option">
                                Pennsylvania
                              </li>
                              <li data-value="8" className="option">
                                Ohio
                              </li>
                              <li data-value="9" className="option">
                                Georgia
                              </li>
                              <li data-value="10" className="option">
                                North Carolina
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-select">
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Rooms</span>
                            <ul className="list">
                              <li data-value="1" className="option">
                                1
                              </li>
                              <li data-value="2" className="option selected">
                                2
                              </li>
                              <li data-value="3" className="option">
                                3
                              </li>
                              <li data-value="4" className="option">
                                4
                              </li>
                              <li data-value="5" className="option">
                                5
                              </li>
                              <li data-value="6" className="option">
                                6
                              </li>
                              <li data-value="7" className="option">
                                7
                              </li>
                              <li data-value="8" className="option">
                                8
                              </li>
                              <li data-value="9" className="option">
                                9
                              </li>
                              <li data-value="10" className="option">
                                10
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-select">
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Bath: Any</span>
                            <ul className="list">
                              <li data-value="1" className="option">
                                1
                              </li>
                              <li data-value="2" className="option selected">
                                2
                              </li>
                              <li data-value="3" className="option">
                                3
                              </li>
                              <li data-value="4" className="option">
                                4
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-select">
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Beds: Any</span>
                            <ul className="list">
                              <li data-value="1" className="option">
                                1
                              </li>
                              <li data-value="2" className="option selected">
                                2
                              </li>
                              <li data-value="3" className="option">
                                3
                              </li>
                              <li data-value="4" className="option">
                                4
                              </li>
                              <li data-value="5" className="option">
                                5
                              </li>
                              <li data-value="6" className="option">
                                6
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="group-checkbox">
                        <div className=" title text-4 fw-6">Amenities:</div>
                        <div className="group-amenities ">
                          <fieldset className="checkbox-item style-1  ">
                            <label>
                              <span className="text-4">Bed linens</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4"> Carbon alarm</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Check-in lockbox </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Coffee maker </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>

                          <fieldset className="checkbox-item style-1  ">
                            <label>
                              <span className="text-4"> Dishwasher</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4"> Fireplace</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Extra pillows </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">First aid kit </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>

                          <fieldset className="checkbox-item style-1  ">
                            <label>
                              <span className="text-4">Hangers </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Iron</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4"> Microwave</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Fireplace</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>

                          <fieldset className="checkbox-item style-1  ">
                            <label>
                              <span className="text-4"> Refrigerator</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Security cameras </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4"> Smoke alarm</span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                          <fieldset className="checkbox-item style-1   mt-12">
                            <label>
                              <span className="text-4">Fireplace </span>
                              <input type="checkbox" />
                              <span className="btn-checkbox"></span>
                            </label>
                          </fieldset>
                        </div>
                      </div>
                    </div> */}
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
