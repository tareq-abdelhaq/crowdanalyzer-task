import classNames from "classnames";
import classes from "./Error.module.css";

function Error(props) {
  const { className, message } = props;

  return <p className={classNames(classes.error, className)}>{message}</p>;
}

export default Error;
