import { ReactComponent as EmptyBoxIcon } from "../../../assets/icons/empty-box.svg";

import classNames from "classnames";
import classes from "./Empty.module.css";

function Empty(props) {
  const { className } = props;

  return (
    <div className={classes.empty}>
      <div className={classNames(classes["empty__icon"], className)}>
        <EmptyBoxIcon />
      </div>
      <p>Sorry, no data to show</p>
    </div>
  );
}

export default Empty;
