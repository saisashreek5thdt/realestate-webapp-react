export default function FooterMain() {
  return (
    <>
      <div className="footer-main">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-menu-list footer-col-block style-2">
              <h5 className="title lh-30 title-desktop">About us</h5>
              <h5 className="title lh-30 title-mobile">About us</h5>
              <ul className="tf-collapse-content">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="service-details.html">Why choose us?</a>
                </li>
                <li>
                  <a href="#">Customer reviews</a>
                </li>
                <li>
                  <a href="agents.html">Our team</a>
                </li>
                <li>
                  <a href="career.html">Careers with realty</a>
                </li>
                <li>
                  <a href="career.html">Work with us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-menu-list footer-col-block">
              <h5 className="title lh-30 title-desktop">Popular house</h5>
              <h5 className="title lh-30 title-mobile">Popular house</h5>
              <ul className="tf-collapse-content">
                <li>
                  <a href="property-gird.html">#Penthouses</a>
                </li>
                <li>
                  <a href="property-gird.html">#Villa</a>
                </li>
                <li>
                  <a href="property-gird.html">#Smart home</a>
                </li>
                <li>
                  <a href="property-gird.html">#Apartments</a>
                </li>
                <li>
                  <a href="property-gird.html">#Office</a>
                </li>
                <li>
                  <a href="property-gird.html">#Bungalow</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-menu-list footer-col-block style-2">
              <h5 className="title lh-30 title-desktop">Quick links</h5>
              <h5 className="title lh-30 title-mobile">Quick links</h5>
              <ul className="tf-collapse-content">
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="contact.html">Contact support</a>
                </li>
                <li>
                  <a href="#">Pricing plans</a>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-menu-list newsletter">
              <h5 className="title lh-30 ">Newsletter</h5>
              <div className="sib-form">
                <div id="sib-form-container" className="sib-form-container">
                  <div id="error-message" className="sib-form-message-panel">
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg
                        viewBox="0 0 512 512"
                        className="sib-icon sib-notification__icon"
                      >
                        <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                      </svg>
                      <span className="sib-form-message-panel__inner-text">
                        Your subscription could not be saved. Please try again.
                      </span>
                    </div>
                  </div>
                  <div id="success-message" className="sib-form-message-panel">
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg
                        viewBox="0 0 512 512"
                        className="sib-icon sib-notification__icon"
                      >
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                      </svg>
                      <span className="sib-form-message-panel__inner-text">
                        Your subscription has been successful.
                      </span>
                    </div>
                  </div>
                  <div
                    id="sib-container"
                    className="sib-container--large sib-container--vertical"
                  >
                    <form
                      id="sib-form"
                      method="POST"
                      action="https://3c02c1a1.sibforms.com/serve/MUIFABjeOIIJNMRgQ-0Mb1bjkLdsnuanXhO94qzsHBwAVG3reSaZ5DIq2ozIM0_PBl7b_lcysdmopwilW1dcjaAmtOu_es-dny_hZggPsstdEuk75SIQ1B7K-NuFEN5hBn9HqJ2SFLbleb-PnrNQY1dGLy7gXPmMlWJfT2Jfc2MeVJg4Ufeezo6UlJhAZwbC5nZ8aV9PghzVQVkE"
                      data-type="subscription"
                    >
                      <div className="sib-form-block">
                        <div className="sib-text-form-block">
                          <p className="text-1">
                            Sign up to receive the latest articles
                          </p>
                        </div>
                      </div>
                      <div className="sib-input sib-form-block">
                        <div className="form__entry entry_block">
                          <div className="form__label-row ">
                            <fieldset className="entry__field">
                              <input
                                className="input input-nl"
                                type="text"
                                id="EMAIL"
                                name="EMAIL"
                                autoComplete="off"
                                placeholder="Your email address"
                                data-required="true"
                                required
                              />
                            </fieldset>
                          </div>
                          <label className="  entry__error entry__error--primary"></label>
                        </div>
                      </div>
                      <div className="sib-optin sib-form-block">
                        <div className="form__entry entry_mcq">
                          <div className="form__label-row ">
                            <div className="checkbox-item ">
                              <label>
                                <span className="text-2 text-color-default">
                                  I have read and agree to the terms &
                                  conditions
                                </span>
                                <input
                                  type="checkbox"
                                  className="input_replaced"
                                  value="1"
                                  id="OPT_IN"
                                  name="OPT_IN"
                                />
                                <span className="btn-checkbox"></span>
                              </label>
                            </div>
                          </div>
                          <label className="entry__error entry__error--primary"></label>
                        </div>
                      </div>
                      <div className="sib-form-block">
                        <button
                          className="sib-form-block__button sib-form-block__button-with-loader tf-btn bg-color-primary w-full"
                          form="sib-form"
                          type="submit"
                        >
                          <svg
                            className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                            viewBox="0 0 512 512"
                          >
                            <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                          </svg>
                          SUBSCRIBE
                        </button>
                      </div>
                    </form>
                  </div>
                  <input
                    type="text"
                    name="email_address_check"
                    value=""
                    className="input--hidden"
                  />
                  <input type="hidden" name="locale" value="en" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
