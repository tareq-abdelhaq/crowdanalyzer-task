import classes from "./MainContainer.module.css";

function MainContainer(props) {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
}

export default MainContainer;
