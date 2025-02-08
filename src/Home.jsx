import {
  Preload,
  TopBar,
  Header,
  PageTitle,
  AboutHome,
  Categories,
  FeatureProperties,
  ExploreSection,
  DiscoverHelp,
  PartnersSection,
  HouseListings,
  HouseRentSell,
  ClientsSay,
  Insight,
  FooterContainer
} from "./Component/index";

export default function Home() {
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
          {/* Page Title Start */}
          <PageTitle />
          {/* Page Title End */}
          {/* Main Content Starts */}
          <main className="main-content">
            {/* About Section Start */}
            <AboutHome />
            {/* About Section End */}
            {/* Categories Start */}
            <Categories />
            {/* Categories End */}
            {/* Features Properties Start */}
            <FeatureProperties />
            {/* Features Properties End */}
            {/* Explore Section Start */}
            <ExploreSection />
            {/* Explore Section End */}
            {/* Discover Help Start */}
            <DiscoverHelp />
            {/* Discover Help End */}
            {/* Partners Section Start */}
            <PartnersSection />
            {/* Partners Section End */}
            {/* House Rent Sell Start */}
            <HouseRentSell />
            {/* House Rent Sell End */}
            {/* House Listings Start */}
            <HouseListings />
            {/* House Listings End */}            
            {/* Clients Say Start */}
            <ClientsSay />
            {/* Clients Say End */}
            {/* Insight Start */}
            <Insight />
            {/* Insight End */}
          </main>
          {/* Main Content Ends */}
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
