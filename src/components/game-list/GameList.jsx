import { Link } from "react-router-dom";

import { APP_PATHS } from "../../constants/routes";

import GameItem from "./game-item/GameItem";

import classes from "./GameList.module.css";
import Empty from "../ui/empty/Empty";

function GameList(props) {
  const { title, gameList } = props;

  const isViewMoreVisible = gameList.length >= 5;
  const isEmpty = gameList.length === 0;

  return (
    <section className={classes["game-list-section"]}>
      <header>
        <h2>{title}</h2>
        {isViewMoreVisible && <Link to={APP_PATHS.HOME}>SEE ALL</Link>}
      </header>
      {isEmpty ? (
        <Empty />
      ) : (
        <ul>
          {gameList.map((game) => (
            <GameItem key={game.id} {...game} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default GameList;
