import { Fragment, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllGames } from "../../api/games";

import Loading from "../../components/ui/loading/Loading";
import DataLoadingError from "../../components/ui/data-loading-error/DataLoadingError";
import FeaturedSection from "./components/featured-section/FeaturedSection";
import GameList from "../../components/game-list/GameList";

function HomePage() {
  const [featuredGame, setFeaturedGame] = useState();
  const [recommendedGameList, setRecommendedGameList] = useState([]);
  const [popularGameList, setPopularGameList] = useState([]);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [loadingDataError, setLoadingDataError] = useState("");

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const fetchGames = useCallback(async () => {
    const params = {
      skip: selectedCategory ? 0 : 11,
      limit: 11,
    };
    setLoadingDataError("");
    setIsDataLoading(true);
    try {
      const games = await getAllGames(selectedCategory, params);
      setFeaturedGame(games[0]);
      setRecommendedGameList(games.slice(1, 6));
      setPopularGameList(games.slice(6, 11));
    } catch (err) {
      setLoadingDataError(err.message);
    } finally {
      setIsDataLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <Fragment>
      {isDataLoading && <Loading />}
      {loadingDataError && (
        <DataLoadingError message={loadingDataError} onRefetch={fetchGames} />
      )}
      {!isDataLoading && !loadingDataError && (
        <Fragment>
          <FeaturedSection {...featuredGame} />
          <GameList
            title="Most Recommendation"
            gameList={recommendedGameList}
          />
          <GameList title="Most Popular" gameList={popularGameList} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default HomePage;
