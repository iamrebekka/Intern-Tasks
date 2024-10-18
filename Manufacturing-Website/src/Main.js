import React from "react";
import pipe from "./images/pipe.jpg";

function Main() {
  return (
    <div>
      <section className="hero-section">
        <h1>
          The Future of Manufacturing <br /> with <span>Latest Technology</span>
        </h1>
        <p>
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>
        <div className="buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Try Demo</button>
        </div>
        <div className="reviews">
          <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
          <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
          <i className="fas fa-star"></i>
          <span>5.0</span>
          <p>
            from 80+ <span>reviews</span>
          </p>
          <div className="arrow-square">
          <i class="bi bi-arrow-up-right-circle"></i>
          <i class="bx bx-bar-chart-square"></i>
          </div>
          <div className="text-water">
            <i class="bi bi-file-earmark-text-fill"></i>
            <i class="bx bx-water"></i>
          </div>
        


        
        
        </div>
      </section>


        

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box-img">
            <img src={pipe} alt="Pipes" className="pipe" />
          </div>
          <div className="stat-box highlight1">
            <h3>100+</h3>
            <p>Our Esteemed Clients and Partners</p>
          </div>
          <div className="stat-box highlight2">
            <h4>Total Projects</h4>
            <h3>1951+</h3>
            <p className="highlight-text">
              Increase of <span>126</span> this month
            </p>
          </div>
          <div className="stat-box highlight3">
            <h3>6+</h3>
            <p>Years of Dedicated Service</p>
          </div>
          <div className="stat-box highlight4">
            <i class="bi bi-speedometer"></i>
            <p>Achieve Optimal Efficency and Boost Productivity</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
