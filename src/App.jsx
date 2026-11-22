import React from "react";
import { useState, useEffect } from "react";

const services = [
  {
    icon: "bi-person-heart",
    title: "Individual Counselling",
    description:
      "A supportive setting to discuss personal concerns, reflect, and explore your goals.",
  },
  {
    icon: "bi-chat-heart",
    title: "Emotional Wellbeing",
    description:
      "Space to better understand emotions and explore approaches to everyday challenges.",
  },
  {
    icon: "bi-people",
    title: "Relationship Support",
    description:
      "Explore communication, relationships, and personal boundaries in a respectful setting.",
  },
  {
    icon: "bi-balloon-heart",
    title: "Child Counselling",
    description:
      "Support your child's emotional well-being, build confidence, and develop healthy ways to express feelings and overcome challenges.",
  },
  {
    icon: "bi-heart-pulse",
    title: "Addiction Counselling",
    description:
      "Find support in overcoming addictive behaviours, building healthier habits, and taking positive steps towards a balanced life.",
  },
  {
    icon: "bi-briefcase",
    title: "Career Counselling",
    description:
      "Discover your strengths, explore career opportunities, and make confident decisions to shape a successful future.",
  },

];

const values = [
  {
    icon: "bi-shield-check",
    title: "Respect",
    description: "Every person deserves to be treated with dignity, kindness, and care. We value your individuality and personal experiences. Our approach ensures a safe, welcoming, and judgment-free environment where you feel comfortable expressing yourself openly.",
  },
  {
    icon: "bi-chat-square-heart",
    title: "Understanding",
    description: "Your thoughts, feelings, and experiences matter to us. We take the time to listen carefully and understand your concerns. Through empathy, patience, and thoughtful guidance, we aim to help you feel heard, supported, and understood.",
  },
  {
    icon: "bi-flower2",
    title: "Personal Growth",
    description: "Personal growth is a journey that happens at your own pace. We encourage you to explore your strengths, understand your emotions, and identify your goals. With the right guidance and support, you can build confidence and take meaningful steps towards a healthier future.",
  },
];

const faqs = [
  {
    id: "one",
    question: "How can I book a session?",
    answer:
      "Contact the counselling service using the details on this website to discuss availability and appointment options.",
  },
  {
    id: "two",
    question: "Are online sessions available?",
    answer:
      "Please contact the counselling service to confirm whether online sessions are available.",
  },
  {
    id: "three",
    question: "What happens during the first session?",
    answer:
      "The first session can be an opportunity to discuss your concerns, ask questions, and learn about the counselling process.",
  },
];


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom">
      <div className="container py-2">
        <a className="navbar-brand brand-lockup" href="#home" aria-label="Agathin Kural Counselling Services home">
          <img className="brand-wordmark" src="/agathin-kural-logo.jpg" alt="Agathin Kural Counselling Services" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQs</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <a className="btn btn-success rounded-pill px-4" href="https://docs.google.com/forms/d/e/1FAIpQLSfA1r75IBB0E0mzvB-0Jr3YHeIqPSZ5atiQ_vdMmtKd57nVwQ/viewform?usp=header">Book a Session</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge rounded-pill px-3 py-2 mb-3 bg-success-subtle text-success">
              YOUR WELL-BEING MATTERS
            </span>
            <h1 className="display-4 fw-bold mb-4">
              The healing begins with <span className="brand-purple">being heard.</span>
            </h1>
            <p className="lead text-secondary fw-medium mb-4">
              Take a gentle step towards emotional well-being. Explore counselling
              in a supportive, respectful, and welcoming environment.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfA1r75IBB0E0mzvB-0Jr3YHeIqPSZ5atiQ_vdMmtKd57nVwQ/viewform?usp=header" className="btn btn-success btn-lg rounded-pill px-4">
                Book a Session 
              </a>
              <a href="#about" className="btn btn-outline-success btn-lg rounded-pill px-4 bic-color">
                Learn More
              </a>
            </div>
            {/* <div className="d-flex align-items-center gap-2 mt-4 text-secondary">
              <i className="bi bi-heart text-success" aria-hidden="true" />
              <span className="brand-tagline">The healing begins with being heard.</span>
            </div> */}
          </div>

          <div className="col-lg-6 text-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="img-fluid"
              style={{
                width: "100%",
                maxWidth: "560px",
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "multiply",
                filter: "brightness(1.2)",
              }}
              aria-label="A brain character meditating peacefully"
            >
              <source
                src="/Brain_meditating.mp4"
                type="video/mp4"
              />
              Your browser does not support this video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-lg-5">
        <div className="row align-items-start g-4">
          <div className="col-lg-5">
            <span className="text-success fw-semibold">ABOUT US</span>
            <h2 className="display-6 fw-bold mt-3">Your journey deserves understanding.</h2>
          </div>
          <div className="col-lg-7">
            <p className="text-secondary fs-5">
              Everyone deserves a space where they can express their thoughts
              and feelings without fear of judgement.
            </p>
            <p className="text-secondary">
              Our counselling service aims to provide a respectful, supportive
              environment where individuals can explore their concerns and work
              towards personal well-being.
            </p>
            <a href="#contact" className="btn btn-outline-success rounded-pill px-4 mt-2 bic-color">
              Connect With Us
            </a>
          </div>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <article className="card h-100 border-0 rounded-4 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <i className="bi bi-eye fs-2 text-success" aria-hidden="true" />
                <h3 className="h4 fw-bold mt-3">Our Vision</h3>
                <p className="text-secondary mb-0">
                  A world where everyone feels heard, understood, and supported
                  in their journey towards well-being.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article className="card h-100 border-0 rounded-4 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <i className="bi bi-heart fs-2 text-success" aria-hidden="true" />
                <h3 className="h4 fw-bold mt-3">Our Mission</h3>
                <p className="text-secondary mb-0">
                  To offer a respectful, supportive space where people can
                  explore their concerns and take steps towards personal well-being.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <span className="text-success fw-semibold">OUR SERVICES</span>
          <h2 className="display-6 fw-bold mt-2">Support for Your Journey</h2>
          <p className="text-secondary">Explore the services offered by the counselling practice.</p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <div className="card h-100 border-0 rounded-4 shadow-sm">
                <div className="card-body p-4">
                  <i className={`bi ${service.icon} fs-1 text-success`} aria-hidden="true" />
                  <h3 className="h4 fw-bold mt-4">{service.title}</h3>
                  <p className="text-secondary mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="py-5">
      <div className="container py-lg-5 text-center">
        <span className="text-success fw-semibold">OUR APPROACH</span>
        <h2 className="display-6 fw-bold mt-3">Care That Respects Your Journey</h2>
        <div className="row g-4 mt-4">
          {values.map((value) => (
            <div className="col-md-4" key={value.title}>
              <i className={`bi ${value.icon} fs-1 text-success`} aria-hidden="true" />
              <h3 className="h5 fw-bold mt-3">{value.title}</h3>
              <p className="text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="mb-4">
          <h2 className="display-6 fw-bold">Any Questions?</h2>
        </div>
        <div className="accordion faq-accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${faq.id}`}
                  aria-expanded="false"
                  aria-controls={`faq-${faq.id}`}
                >
                  {faq.question}
                </button>
              </h3>
              <div
                id={`faq-${faq.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="brand-contact-card rounded-5 p-4 p-md-5 text-center">
              {/* <i className="bi bi-chat-heart fs-1" aria-hidden="true" /> */}
              <h2 className="display-6 fw-bold mt-3">Let's Start a Conversation</h2>
              <p className="mb-4">
                Reach out to learn more about the services and available appointments.
              </p>
              <div className="brand-contact-links mb-4">
                <a
                  className="brand-contact-link"
                  href="mailto:agathinkural26@gmail.com"
                  aria-label="Email agathinkural26@gmail.com"
                >
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <span>agathinkural26@gmail.com</span>
                </a>
                <span className="brand-contact-divider" aria-hidden="true">|</span>
                <a
                  className="brand-contact-link brand-phone-link"
                  href="tel:+919443311321"
                  aria-label="Call +91 94433 11321"
                >
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <span className="brand-phone-numbers">
                    <span>+91 94433 11321</span>
                    <span>+91 89460 10577</span>
                    <span>+91 90800 45651</span>
                  </span>

                </a>
                <span className="brand-contact-divider" aria-hidden="true">|</span>
                <a
                  className="brand-contact-link"
                  href="https://www.instagram.com/agathinkural_._?exln=MWtkNGo2ZHc3c2MyMQ=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Agathin Kural on Instagram"
                >
                  <i className="bi bi-instagram" aria-hidden="true" />
                  <span>@agathinkural_._</span>
                </a>
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfA1r75IBB0E0mzvB-0Jr3YHeIqPSZ5atiQ_vdMmtKd57nVwQ/viewform?usp=header" className="btn btn-success btn-lg rounded-pill px-4">
                Book a Session 
              </a>
              <p className="small mt-4 mb-0">
                This website is not intended for emergency assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="brand-footer py-4 border-top">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-md-6 text-center text-md-start">
            <span className="fw-bold fs-5">Agathin Kural</span>
            <p className="brand-tagline small mb-0 mt-1">The healing begins with being heard.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-secondary small mt-2 mb-0">
              © {new Date().getFullYear()} Agathin Kural. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          className="btn btn-success rounded-circle shadow"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          title="Back to top"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "50px",
            height: "50px",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i className="bi bi-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}
