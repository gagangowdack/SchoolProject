import "../App.css";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaSchool, 
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="school-footer">
      
      {/* TOP BAR */}
      <div className="footer-top-bar">
        <p>📢 Admissions for 2025–26 are OPEN! Enroll Now</p>
      </div>

      <div className="footer-container">

        {/* SCHOOL INFO */}
        <div className="footer-section">
          <h3><FaSchool /> Chaitanya Gurukula School</h3>
          <p>A place where education meets values.</p>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> Santebennur, Karnataka – 577552</p>
          <p><FaPhone /> <a href="tel:+919999999999">+91 99999 99999</a></p>
          <p><FaEnvelope /> <a href="mailto:info@chaitanyagurukula.edu.in">info@chaitanyagurukula.edu.in</a></p>
        </div>

        {/* SCHOOL TIMINGS */}
        <div className="footer-section">
          <h4>School Timings</h4>
          <p>Monday – Friday: 9:00 AM – 4:15 PM</p>
          <p>Saturday: 9:00 AM – 12:45 PM</p>
          <p>Sunday: Holiday</p>
        </div>

        {/* NEWSLETTER */}
       

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Chaitanya Gurukula School — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
