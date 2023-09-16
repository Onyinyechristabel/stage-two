import "./footer.css";
const Footer = function () {
  return (
    <section className="footer">
      <div className=" footer__socials">
        <img className="footer__social" src="/images/facebook.png" alt="" />
        <img className="footer__social" src="/images/instagram.png" alt="" />
        <img className="footer__social" src="/images/twitter.png" alt="" />
        <img className="footer__social" src="/images/youtube.png" alt="" />
      </div>
      <div className="footer__terms">
        <p className="footer__term">Conditions of Use</p>
        <p className="footer__term">Privacy & Policy</p>
        <p className="footer__term">Press Room</p>
      </div>
      <h4 className="footer__foot">© 2021 MovieBox by Adriana Eka Prayudha </h4>
    </section>
  );
};
export default Footer;
