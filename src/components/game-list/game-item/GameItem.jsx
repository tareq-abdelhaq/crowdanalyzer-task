import { Link } from "react-router-dom";

import { APP_PATHS } from "../../../constants/routes";

import Button from "../../ui/Button/Button";

import classes from "./GameItem.module.css";

function GameItem(props) {
  const { id, title, category, rating, images } = props;

  return (
    <li className={classes["game-item"]}>
      <div className={classes["game__image"]}>
        <img src={images[0]} alt={title} />
        <span className={classes["game__rating"]}>{rating}</span>
      </div>
      <div className={classes["game-info"]}>
        <p>{title}</p>
        <p>{category}</p>
      </div>

      <Link to={APP_PATHS.GAME_DETAILS.replace(":gameId", id)}>
        <Button type="primary">more info</Button>
      </Link>
    </li>
  );
}

export default GameItem;
