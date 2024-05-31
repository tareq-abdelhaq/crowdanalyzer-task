import classNames from "classnames";
import classes from "./MainContainer.module.css";

function MainContainer(props) {
  const { className, children } = props;

  return (
    <div className={classNames(className, classes.container)}>{children}</div>
  );
}

export default MainContainer;
