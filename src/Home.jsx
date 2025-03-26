import {
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
} from "./Component/index";

export default function Home() {
  return (
    <>
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
    </>
  );
}
