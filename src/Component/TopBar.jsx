import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <div className="tf-top-bar bg-1">
        <div className="tf-container xl">
          <div className="row">
            <div className="col-12">
              <div className="top-bar-inner">
                <ul className="top-bar-info">
                  <li>
                    <i className="icon-phone-1"></i>
                    <p>
                      Phone:{" "}
                      <span className="fw-7">
                        <Link to="tel:+918877330289">
                          (+91) 887 - 733 - 0289
                        </Link>
                      </span>
                    </p>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <p>
                      Email:{" "}
                      <Link to="mailto:info@realestate.com">
                        info@realestate.com
                      </Link>
                    </p>
                  </li>
                </ul>
                <div className="wrap-social">
                  <p>Follow Us On:</p>
                  <ul className="tf-social style-2">
                    <li>
                      <Link to="/">
                        <i className="icon-fb"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-X"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-linked"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-ins"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
