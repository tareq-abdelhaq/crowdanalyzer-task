import { Link } from "react-router-dom";

import GameItem from "./game-item/GameItem";

function GameList(props) {
  const { title, gameList } = props;

  return (
    <section>
      <header>
        <h2>{title}</h2>
        <Link>SEE ALL</Link>
      </header>
      <ul>
        {gameList.map((game) => (
          <GameItem {...game} />
        ))}
      </ul>
    </section>
  );
}

export default GameList;
