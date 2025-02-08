import footerLogo from "../assets/images/logo/logo-5.1@2x.png";

export default function FooterLogo() {
  return (
    <>
      <div className="footer-logo">
        <a href="index.html">
          <img id="logo_footer" src={footerLogo} alt="logo-footer" />
        </a>
      </div>
    </>
  );
}
