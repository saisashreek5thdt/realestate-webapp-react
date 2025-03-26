import { Preload, TopBar, Header, FooterContainer } from "./Component/index";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="theme-color-3">
        {/* Wrapper Section Start */}
        <div id="wrapper" className="counter-scroll">
          {/* Preload Section Start */}
          <Preload />
          {/* Preload Section End */}
          {/* Top Bar Section Start */}
          <TopBar />
          {/* Top Bar Section End */}
          {/* Header Section Start */}
          <Header />
          {/* Header Section End */}
          {children}
          {/* Footer Section Starts */}
          <footer id="footer">
            <FooterContainer />
          </footer>
          {/* Footer Section Ends */}
        </div>
        {/* Wrapper Section End */}
      </div>
    </>
  );
}
