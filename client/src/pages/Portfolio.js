import React, { Component } from "react";
import projects from "../projects.json";
import "./Portfolio.css";

import PortfolioCard from "../components/PortollioCard/PortfolioCard";

class Portfolio extends Component {
  state = {
    projects,
  };

  handleClick = (link) => {
    window.open(link, "_blank");
  };

  render() {
    return (
      <>
        <div className="card" style={{ width: "auto" }}>
          <h3 className="card-header">Portfolio Gallery</h3>

          <div className="card-body container" id="gallery">
            {this.state.projects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
