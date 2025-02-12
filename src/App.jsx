import React from "react";
import { Header } from "./components/header/header";
import heroImg from "./assets/hero.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <div className="hero__content">
              <h1>Bring everyone together to build better products.</h1>
              <p>
                Manage makes it simple for software teams to plan day-to-day tasks
                while keeping the larger team goals in view.
              </p>
              <button className="btn-primary">Get Started</button>
            </div>
            <div className="hero__image">
              <img src={heroImg} alt="Hero statistics" />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features__block">
            <div className="features__content">
              <h2>What's different about Manage?</h2>
              <p>
                Manage provides all the functionality your team needs, without the
                complexity. Our software is tailor-made for modern digital product
                teams.
              </p>
            </div>
            <div className="features__list">
              <div className="feature-item">
                <span className="feature-number">01</span>
                <div>
                  <h3>Track company-wide progress</h3>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go from
                    tracking progress at the milestone level all the way down to the
                    smallest of details. Never lose sight of the bigger picture again.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-number">02</span>
                <div>
                  <h3>Advanced built-in reports</h3>
                  <p>
                    Set internal delivery estimates and track progress toward company
                    goals. Our customisable dashboard helps you build out the reports
                    you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-number">03</span>
                <div>
                  <h3>Everything you need in one place</h3>
                  <p>
                    Stop jumping from one service to another to communicate, store
                    files, track tasks and share documents. Manage offers an
                    all-in-one team productivity solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What they've said</h2>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <img src={heroImg} alt="Anisha Li" />
              <h3>Anisha Li</h3>
              <p>
                "Manage has supercharged our team's workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </div>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__block">
            <h2>Simplify how your team works today.</h2>
            <button className="btn-secondary">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
