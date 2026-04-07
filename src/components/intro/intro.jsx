import React from 'react';
import './intro.css';
import self from "../../asest/self.png";

const Intro = () => {
  return (

    <section id='intro'>

      <div className="introContent">

        <span className="intro-text">Crafting Modern Web <br /> Experiences With Purpose !</span>
        <p className="intro-para"><span className='main-para'>Hi, I'm Jay</span> — <span className='sub-para'>a Full Stack Developer <br />building  reliable, responsive, and scalable web  <br />applications using React, Node.js, and modern technologies.</span></p>
        <div id="btn">
          <button className="explore-work">Explore My Work</button>
          <button className="lets-connect">Let's Connect</button>
        </div>
      </div>

      <img src={self} alt="" className="bg-image" />

    </section>


  )
}

export default Intro

