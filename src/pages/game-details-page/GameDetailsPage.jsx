import { Fragment, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getGameDetails, getAllGames } from "../../api/games";

import Loading from "../../components/ui/loading/Loading";
import DataLoadingError from "../../components/ui/data-loading-error/DataLoadingError";
import GameDetails from "./components/game-details/GameDetails";
import GameList from "../../components/game-list/GameList";

function GameDetailsPage() {
  const [gameDetails, setGameDetails] = useState();
  const [recommendedGameList, setRecommendedGameList] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [loadingDataError, setLoadingDataError] = useState("");

  const { gameId } = useParams();

  const fetchData = useCallback(async () => {
    const params = {
      skip: 12,
      limit: 5,
    };
    setLoadingDataError("");
    setIsDataLoading(true);
    try {
      const game = await getGameDetails(+gameId);
      const games = await getAllGames(null, params);
      setGameDetails(game);
      setRecommendedGameList(games);
    } catch (err) {
      setLoadingDataError(err.message);
    } finally {
      setIsDataLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Fragment>
      {isDataLoading && <Loading />}
      {loadingDataError && (
        <DataLoadingError message={loadingDataError} onRefetch={fetchData} />
      )}
      {!isDataLoading && !loadingDataError && (
        <Fragment>
          <GameDetails {...gameDetails} />
          <GameList
            title="Most Recommendation"
            gameList={recommendedGameList}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

export default GameDetailsPage;
