import Error from "../error/Error";

import classes from "./DataLoadingError.module.css";

function DataLoadingError(props) {
  const { message, onRefetch } = props;
  return (
    <div className={classes.error}>
      <Error message={message} />
      <button onClick={onRefetch} className={classes["refetch-btn"]}>
        try again &#x21bb;
      </button>
    </div>
  );
}

export default DataLoadingError;
