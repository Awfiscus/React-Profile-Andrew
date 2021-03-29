import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  return (
    <>
      <div className="card" style={{ width: "200rem" }}>
        <img
          src={`${process.env.PUBLIC_URL}/${props.image}`}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button
            class="btn btn-primary"
            onClick={() => props.handleClick(props.link)}
          >
            Link to the Project
          </button>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
