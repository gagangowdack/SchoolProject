import React from "react";
import "./About2.css";
import buildingImg from "../assets/GalleryImg/4.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const About2 = () => {

  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }
}, [location]);
  return (

    

    <div className="about2-page">

      {/* ---------- ABOUT SCHOOL SECTION ---------- */}
      <section className="about2-section">
        <h2 className="about2-title">About Our School</h2>
        <div className="about2-divider"></div>

        <p className="about2-intro">
          Chaitanya Gurukula School, Santebennur, is committed to nurturing
          young minds with a blend of traditional values and modern education.
        </p>
      </section>

      {/* ---------- MAIN ABOUT CONTENT ---------- */}
      <section className="about2-content">
        <img src={buildingImg} alt="School Building" className="about2-image" />

        <div className="about2-text">
          <p>
            G.I.S (GURUKULA INTERNATIONAL SCHOOL) was established in 1980...
          </p>

          <p>
            The founders and successive leaders were distinguished educationists...
          </p>

          <p>
            For more than four decades, GIS remains devoted to its mission...
          </p>
        </div>
      </section>

      {/* ---------- CGS VALUES SECTION ---------- */}
      <section className="about2-values">
        <h2 className="about2-title">CGS Values</h2>
        <div className="about2-divider"></div>

        <div className="values-container">
          <img src={buildingImg} alt="GIS Values" className="about2-image" />

          <ul className="values-list">
            <li><strong>Discipline:</strong> Responsible behaviour.</li>
            <li><strong>Integrity:</strong> Honesty & moral character.</li>
            <li><strong>Respect:</strong> Dignity for everyone.</li>
            <li><strong>Excellence:</strong> High academic standards.</li>
            <li><strong>Holistic Growth:</strong> Mental & physical development.</li>
            <li><strong>Traditional Values:</strong> Culture + modern learning.</li>
          </ul>
        </div>

        <img src={buildingImg} alt="Management" className="merged-mobile-image" />
      </section>

      {/* ---------- MANAGEMENT & PRINCIPAL SECTION ---------- */}
      <section className="about2-management-merged">
        <h2 className="about2-title">Management & Principal’s Message</h2>
        <div className="about2-divider"></div>

        <div className="merged-container">
          <img src={buildingImg} alt="Management" className="merged-desktop-image about2-image" />

          <div className="merged-text">
            <img src={buildingImg} alt="Management" className="merged-mobile-image" />

            <h3 className="management-subtitle">Chairman & Managing Director</h3>
            <p className="management-name">Mr. Nanjundaiah. S</p>

            <p className="merged-paragraph">
              Completed MA. B.Ed., from Mysore University in 1979...
            </p>

            <h3 className="management-subtitle">From the Principal’s Desk</h3>

            <p className="merged-paragraph">
              Education of the new millennium needs to be innovative...
            </p>

            <p className="merged-paragraph">
              Our mission is to impart quality education...
            </p>

            <p className="merged-paragraph">
              We welcome you into our institution...
            </p>

            {/* Mobile-only CGS Values */}
            <div className="cgsv-values">
              <h2 className="about2-title">CGS Values</h2>
              <img src={buildingImg} alt="Management" className="merged-mobile-image" />
              <ul>
                <li>Discipline</li>
                <li>Integrity</li>
                <li>Respect</li>
                <li>Excellence</li>
                <li>Holistic Growth</li>
                <li>Traditional Values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXTRA SECTIONS ---------- */}

      {/* ADMISSION SECTION */}
      <section id="admission" className="extra-section">
        <h2 className="about2-title">Admissions Open 2026–27</h2>
        <div className="about2-divider"></div>

        <div className="extra-flex">
          <img src={buildingImg} alt="Admission" className="extra-image" />
          <p className="extra-text">
            Admissions are open for <strong>2026–27</strong>. Seats are limited!
          </p>
        </div>
      </section>

      {/* SCHOOL BUS */}
      <section id="bus" className="extra-section">
        <h2 className="about2-title">School Bus Facility</h2>
        <div className="about2-divider"></div>

        <div className="extra-flex">
          <img src={buildingImg} alt="School Bus" className="extra-image" />
          <p className="extra-text">
            Safe transportation with trained drivers, GPS, and safety rules.
          </p>
        </div>
      </section>

      {/* LAB SECTION */}
      <section id="lab" className="extra-section">
        <h2 className="about2-title">New Computer & Science Lab</h2>
        <div className="about2-divider"></div>

        <div className="extra-flex">
          <img src={buildingImg} alt="Lab" className="extra-image" />
          <p className="extra-text">
            Modern labs with latest equipment for hands-on learning.
          </p>
        </div>
      </section>

      {/* SCIENCE FAIR */}
      <section id="science-fair" className="extra-section">
        <h2 className="about2-title">Annual Science & Art Fair</h2>
        <div className="about2-divider"></div>

        <div className="extra-flex">
          <img src={buildingImg} alt="Science Fair" className="extra-image" />
          <p className="extra-text">
            Students showcase creativity, innovation & scientific thinking.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About2;
