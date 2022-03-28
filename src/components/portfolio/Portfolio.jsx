import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Practical Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Travel Landing page : React</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/travelhd_demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://travelhd-demo.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio2} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Villa : React, Styled components</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/realestateHD_demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://realestate-hd-demo.vercel.app/"
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio3} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Music web : React, TailwindCSS</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDLofi"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://thdungwithbugs.github.io/HDLofi/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio4} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Weather Bot : React, Bootstrap</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/weatherApp-demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://thdungwithbugs.github.io/weatherApp-demo/"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio5} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Movie website design : Figma</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://www.figma.com/file/JcNusMghZlmXZjP8bBvbKx/Movie-Web?node-id=0%3A1"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Figma
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio6} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Mar website design : Figma</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://www.figma.com/file/ndvubIwcTBXX5rpQhTaMeu/Untitled"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Figma
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
