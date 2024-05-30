import classes from "./Error.module.css";

function Error(props) {
  const { message } = props;

  return <p className={classes.error}>{message}</p>;
}

export default Error;
