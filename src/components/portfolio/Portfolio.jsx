import React from "react";
import "./portfolio.css";
import portfolio from "../../assets/portfolio.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/portfolio7.png";
import portfoliomu from "../../assets/portfoliomu.png";
import myPortfolio from "../../assets/myportfolio.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Practical Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDTicket : React, TailwindCSS, Antd</h3>
            <div className="portfolio__item-cta">
              <a
                // href="https://github.com/thdungwithbugs/travelhd_demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Private
              </a>
              <a
                href="https://hdticket.vercel.app/"
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
            <img src={portfoliomu} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDMuvi Film Infomation : React</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDMuvi"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://hdmovie-teal.vercel.app/"
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
            <h3>Villa UI: React, Styled components</h3>
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
            <img src={myPortfolio} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HD Portfolio : React, CSS</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://thdungwithbugs.github.io/my-portfolio/"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://github.com/thdungwithbugs/my-portfolio"
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
            <img src={portfolio7} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Face Scan : Face-api.js</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/faceRecognition_hd"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://thdungwithbugs.github.io/faceRecognition_hd/"
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
