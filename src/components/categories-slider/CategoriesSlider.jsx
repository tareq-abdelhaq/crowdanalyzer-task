import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories } from "../../api/categories";

import Loading from "../ui/loading/Loading";
import DataLoadingError from "../ui/data-loading-error/DataLoadingError";

import classes from "./CategoriesSlider.module.css";
import classNames from "classnames";

function CategoriesSlider() {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [loadingDataError, setLoadingDataError] = useState("");

  const [searchParams, setSeachParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  function categorySelectedHandler(category) {
    if (selectedCategory === category) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSeachParams(searchParams);
  }

  const fetchCategories = useCallback(async () => {
    setLoadingDataError("");
    setIsDataLoading(true);
    try {
      const categories = await getAllCategories();
      setCategoryList(categories);
    } catch (err) {
      setLoadingDataError(err.message);
    } finally {
      setIsDataLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className={classes["categories"]}>
      {isDataLoading && <Loading />}
      {loadingDataError && (
        <DataLoadingError
          message={loadingDataError}
          onRefetch={fetchCategories}
        />
      )}
      {!isDataLoading && !loadingDataError && (
        <ul className={classes.slider}>
          {categoryList.map((category, index) => (
            <li
              key={index}
              className={classNames(classes.slide, {
                [classes["slide--selected"]]: category === selectedCategory,
              })}
              onClick={categorySelectedHandler.bind(null, category)}
              role="button"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriesSlider;
