import loading from "../assets/images/logo/loading.png";

export default function Preload() {
  return (
    <>
      
      <div id="loading">
        <div id="loading-center">
          <div className="loader-container">
            <div className="wrap-loader">
              <div className="loader"></div>
              <div className="icon">
                <img src={loading} alt="loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
