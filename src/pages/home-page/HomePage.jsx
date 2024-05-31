import { Fragment, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllProducts } from "../../api/products";

import Loading from "../../components/ui/loading/Loading";
import DataLoadingError from "../../components/ui/data-loading-error/DataLoadingError";
import FeaturedSection from "./components/featured-section/FeaturedSection";
import GameList from "../../components/game-list/GameList";

function HomePage() {
  const [featuredProduct, setFeaturedProduct] = useState();
  const [recommendedProductList, setRecommendedProductList] = useState([]);
  const [popularProductList, setPopularProductList] = useState([]);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [loadingDataError, setLoadingDataError] = useState("");

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const fetchProducts = useCallback(async () => {
    setLoadingDataError("");
    setIsDataLoading(true);
    try {
      const products = await getAllProducts(
        selectedCategory,
        "skip=45&limit=11"
      );
      setFeaturedProduct(products[0]);
      setRecommendedProductList(products.slice(1, 6));
      setPopularProductList(products.slice(6, 11));
    } catch (err) {
      setLoadingDataError(err.message);
    } finally {
      setIsDataLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Fragment>
      {isDataLoading && <Loading />}
      {loadingDataError && (
        <DataLoadingError
          message={loadingDataError}
          onRefetch={fetchProducts}
        />
      )}
      {!isDataLoading && !loadingDataError && (
        <Fragment>
          <FeaturedSection {...featuredProduct} />
          <GameList
            title="Most Recommendation"
            gameList={recommendedProductList}
          />
          <GameList title="Most Popular" gameList={popularProductList} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default HomePage;
