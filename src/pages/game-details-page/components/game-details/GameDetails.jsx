import { useState } from "react";

import classes from "./GameDetails.module.css";

function GameDetails(props) {
  const {
    title,
    brand,
    category,
    description,
    warrantyInformation,
    returnPolicy,
    tags,
    images,
  } = props;

  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  function toggleReadMore() {
    setIsReadMoreExpanded((prevState) => !prevState);
  }

  return (
    <section className={classes["game-details-section"]}>
      <div className={classes["game-banner"]}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={classes["game-details"]}>
        <h2>{title}</h2>
        <p>{brand}</p>
        <p className={classes["game__category"]}>{category}</p>
        <p>{description}</p>
        <div className={classes["read-more"]}>
          {isReadMoreExpanded && (
            <>
              <p>Warranty: {warrantyInformation}</p>
              <p>ReturnPolicy: {returnPolicy}</p>
              <p className={classes["tags"]}>
                Tags:
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            </>
          )}
          <button onClick={toggleReadMore}>
            {isReadMoreExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default GameDetails;
