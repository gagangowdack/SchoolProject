import React from "react";
import Slider from "../components/Slider";
import homeImg from "../assets/home2.jpg";
import avatar1 from "../assets/schoolimg.jpg";
import avatar2 from "../assets/logo.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">

      {/* HERO SLIDER */}
      <Slider />

      {/* 🔔 ALERT BAR SECTION */}
      {/* <div className="alert-bar">
  <marquee behavior="scroll" direction="left" scrollamount="6">
    🔔 <a href="/about#admission">Admission Open for 2026–27</a> | 
    📞 Contact: +91 98765 43210 |
    🚌 <a href="/about#bus">School Bus Available</a> |
    🎉 <a href="/about#lab">New Computer Lab Inaugurated</a> |
    🧪 <a href="/about#science-fair">Science Fair Coming Soon!</a>
  </marquee>
</div> */}
<div className="alert-bar">
  <marquee behavior="scroll" direction="left" scrollamount="6">
    🔔 <Link to="/about#admission">Admission Open for 2026–27</Link> | 
    📞<Link to="/Contact"> Contact: +91 98765 43210 |</Link>
    🚌 <Link to="/about#bus">School Bus Available</Link> |
    🎉 <Link to="/about#lab">New Computer Lab Inaugurated</Link> |
    🧪 <Link to="/about#science-fair">Science Fair Coming Soon!</Link>
  </marquee>
</div>



      <div className="home-container">

        {/* HERO / WELCOME */}
        <header className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">
                Welcome to Chaitanya Gurukula School, Santebennur
              </span>
            </h1>

            <h3 className="tagline">
              Innovative, Values-driven Education at{" "}
              <span className="highlight2">Gurukula International School</span>
            </h3>

            <p className="description">
              Nestled near Magadi Road, our school provides a safe, nurturing
              environment where academic excellence and character development go
              hand in hand.
            </p>
          </div>
        </header>

        {/* COURSES / CONTENT */}
        <section className="content-section">
          <div className="text-block">
            <h2 className="section-title">Our Programs</h2>
            <p>We offer a wide range of programs focused on holistic development:</p>
            <ul className="ddd">
              <li >Nursery: Montessori-based early years (PN, LKG, UKG)</li>
              <li>Primary: NCERT-aligned curriculum for grades 1–5</li>
              <li>Secondary: CBSE curriculum for grades 6–10</li>
              <li>Kannada & English medium options across grades</li>
            </ul>
          </div>

          <div className="image-block">
            <img src={homeImg} alt="School campus" />
          </div>
        </section>

        {/* PARENT TESTIMONIALS */}
        <section className="testimonials-section">
          <h2 className="section-title">Parent Testimonials</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="avatar">
                <img src={avatar1} alt="Priya Sharma" />
              </div>
              <div className="testimonial-body">
                <p className="quote">
                  "The teachers are caring and my child has grown so much in
                  confidence. The school's values match our family's."
                </p>
                <p className="who">— Priya Sharma, Parent</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="avatar placeholder">RB</div>
              <div className="testimonial-body">
                <p className="quote">
                  "A safe environment and excellent co-curricular activities.
                  Highly recommended."
                </p>
                <p className="who">— Ramesh B, Parent</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="avatar">
                <img src={avatar2} alt="Anita B" />
              </div>
              <div className="testimonial-body">
                <p className="quote">
                  "The communication from school is prompt and the faculty are
                  very supportive."
                </p>
                <p className="who">— Anita B, Parent</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>
                We nurture every child's intellectual and emotional growth through
                personalised learning.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Respect</h3>
              <p>
                Respect for self, others and the environment is central to school
                life and community relations.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3>Excellence</h3>
              <p>
                We pursue excellence — academically, creatively and in character —
                in all we do.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEOS SECTION */}
<section className="videos-section">
  <h2 className="section-title">Videos</h2>

  <div className="video-container">
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/HKYn0zIZ6Ws"
      title="School Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


        {/* UPCOMING EVENTS */}
        <section className="events-section">
          <h2 className="section-title">Upcoming Events</h2>

          <div className="events-grid">
            <article className="event-card">
              <div className="event-date">Jun 21, 2026</div>
              <h3>Admissions Open</h3>
              <p>
                Admissions for the new academic year are now open. Enrollments are
                limited — apply early.
              </p>
              <a className="btn outline" href="/contact">
                Apply Now
              </a>
            </article>

            <article className="event-card">
              <div className="event-date">Jul 10, 2026</div>
              <h3>Annual Sports Day</h3>
              <p>
                A day of friendly competition, athletics and house events for all
                students.
              </p>
              <a className="btn outline" href="/about">
                Event Details
              </a>
            </article>

            <article className="event-card">
              <div className="event-date">Aug 05, 2026</div>
              <h3>Science & Art Fair</h3>
              <p>
                Student projects on display — join us to celebrate creativity and
                inquiry.
              </p>
              <a className="btn outline" href="/gallery">
                See Projects
              </a>
            </article>
          </div>
        </section>

        {/* MAP */}
        <h2 className="section-title map-title">Our Directions</h2>
        <iframe
          title="school-location"
          src="https://www.google.com/maps?q=52/4,+9th+cross,+Magadi+Road,+Bangalore+23&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
