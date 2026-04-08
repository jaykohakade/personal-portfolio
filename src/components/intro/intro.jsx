import React from 'react';
import './intro.css';
import self from '../../asest/self.png';

const Intro = () => {
  return (
    <section id="intro">

      {/* ── Text Side ── */}
      <div className="introContent">

        {/* Tag */}
        <span className="intro-tag">Full Stack Developer</span>

        {/* Heading */}
        <h1 className="intro-text">
          Crafting Modern Web <br />
          <span className="highlight">Experiences</span> With Purpose
        </h1>

        {/* Description */}
        <p className="intro-para">
          <span className="main-para">Hi, I'm Jay</span> — a Full Stack Developer building
          reliable, responsive, and scalable web applications using React,
          Node.js, and modern technologies.
        </p>

        {/* CTAs */}
        <div id="btn">
          <button className="explore-work">
            <span>Explore My Work</span>
          </button>
          <button className="lets-connect">Let's Connect</button>
        </div>

      </div>

      {/* ── Image Side ── */}
      <div className="bg-image-wrapper">
        <img src={self} alt="Jay — Full Stack Developer" className="bg-image" />

        {/* Floating stat badges */}
        {/* <div className="stat-badge left">
          {/* <div className="num">15+</div> */}
          {/* <div className="label">Projects Shipped</div>
        </div>  */}

        {/* <div className="stat-badge right"> */}
          {/* <div className="num">2+</div> */}
          {/* <div className="label">Years Experience</div> */}
        {/* </div> */}
      </div>

    </section>
  );
};

export default Intro;