import React, { useState } from "react";

const Card = ({ title, content, onCopy }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={onCopy}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export const Cards = (props) => {
  const [cards, setCards] = useState(props.initialCards || []);

  const handleCopyCard = (index) => {
    const newCards = [...cards];
    newCards.splice(index + 1, 0, {
      title: `Card ${newCards.length + 1}`,
      content: `Lorem ipsum ${newCards.length + 1}`,
    });
    setCards(newCards);
  };

  return (
    <article>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          onCopy={() => handleCopyCard(index)}
        />
      ))}
    </article>
  );
};
