import { ReactComponent as EmptyBoxIcon } from "../../../assets/icons/empty-box.svg";

import classes from "./Empty.module.css";

function Empty() {
  return (
    <div className={classes.empty}>
      <div className={classes["empty__icon"]}>
        <EmptyBoxIcon />
      </div>
      <p>Sorry, no data to show</p>
    </div>
  );
}

export default Empty;
