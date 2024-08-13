import React from 'react';
import './Aboutus.css';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className="AboutPage">
    <Navbar />
      <header className="AboutPage-header">
        <nav className="AboutPage-navbar">
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Investor Relations</li>
            <li>Impact</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="AboutPage-hero">
          <h1>Bringing the world together through live experiences</h1>
        </div>
      </header>
      <main>
        <div className="AboutPage-description">
          <p>
            EvenNexus is a global self-service ticketing platform for live experiences
            that allows anyone to create, share, find and attend events that fuel their
            passions and enrich their lives. From music festivals, marathons, conferences,
            community rallies, and fundraisers, to gaming competitions and air guitar
            contests. Our mission is to bring the world together through live experiences.
          </p>
        </div>
      </main><br></br> <br></br> <br></br> <br></br>
      <Footer />
    </div>
  );
}

export default About;
