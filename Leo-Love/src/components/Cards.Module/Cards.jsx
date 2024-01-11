import React from "react";
import "./Cards.scss";
const Card = ({ title, content }) => {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export const Cards = ({ cards }) => {
  return (
    <article className="CardsContainer">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </article>
  );
};
