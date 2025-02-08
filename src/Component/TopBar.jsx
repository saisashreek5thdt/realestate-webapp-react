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
                      Phone: <span className="fw-7">(603) 555-0123</span>
                    </p>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <p>
                      Email: <a href="#">themesflat@gmail.com</a>
                    </p>
                  </li>
                </ul>
                <div className="wrap-social">
                  <p>Follow us</p>
                  <ul className="tf-social  style-2">
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
      </div>
    </>
  );
}
