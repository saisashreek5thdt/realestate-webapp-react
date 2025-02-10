//import FooterContact from "./FooterContact";
import FooterLogo from "./FooterLogo";
import FooterMain from "./FooterMain";

export default function FooterFunction() {
  return (
    <>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <FooterLogo />
              {/* <FooterContact /> */}
            </div>
          </div>
          <FooterMain />
          <div className="col-12">
            <div className="footer-bottom">
              <p>
                Copyright © 2025{" "}
                <span className="fw-7">PROTY - REAL ESTATE</span> . Designed &
                Developed by
                <a href="#">5TH Dimension Technologies</a>
              </p>
              <div className="wrap-social">
                <div className="text-3  fw-6 text-white">Follow us</div>
                <ul className="tf-social ">
                  <li>
                    <a href="#">
                      <i className="icon-fb"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-X"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linked"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-ins"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
