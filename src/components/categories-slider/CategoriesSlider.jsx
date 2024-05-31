import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories } from "../../api/categories";

import Loading from "../ui/loading/Loading";
import DataLoadingError from "../ui/data-loading-error/DataLoadingError";

import classNames from "classnames";
import classes from "./CategoriesSlider.module.css";

function CategoriesSlider() {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [loadingDataError, setLoadingDataError] = useState("");
  const [isScrollEnabled, setIsScrollEnabled] = useState({
    left: true,
    right: true,
  });

  const sliderContainerRef = useRef();
  const [searchParams, setSeachParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  function scroll(scrollBy) {
    sliderContainerRef.current.scrollLeft += scrollBy;
    const { scrollLeft, scrollWidth, clientWidth } = sliderContainerRef.current;
    setIsScrollEnabled({
      left: scrollLeft > 0,
      right: scrollLeft < scrollWidth - clientWidth,
    });
  }

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
    <div className={classes.categories}>
      {isDataLoading && <Loading />}
      {loadingDataError && (
        <DataLoadingError
          message={loadingDataError}
          onRefetch={fetchCategories}
        />
      )}
      {!isDataLoading && !loadingDataError && (
        <div className={classes["slider-container"]} ref={sliderContainerRef}>
          {isScrollEnabled.left && (
            <div className={classes["slider-control"]}>
              <button onClick={scroll.bind(null, -400)}>&lt;</button>
            </div>
          )}
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
          {isScrollEnabled.right && (
            <div className={classes["slider-control"]}>
              <button onClick={scroll.bind(null, 400)}>&gt;</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CategoriesSlider;
