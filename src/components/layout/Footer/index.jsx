// Packages
import { Link } from "react-router-dom";
// Helpers
import pages from "../../../utils/pages";
// Assets
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoWhiteImage from "../../../assets/logo-white.png";
import "./styles.scss";

const navLinks = Object.values(pages).filter((page) => page.anchorable);

const contacts = [
  { icon: faLocationDot, info: "Little Lemon Restaurant 123 Main Street Anytown, USA 12345" },
  { icon: faPhone, info: "(555) 123-4567" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img className="site-footer-logo" src={logoWhiteImage} alt="Little Lemon" />
        <nav className="site-footer-nav">
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a key={index} href={`https://www.${social.name}.com`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
