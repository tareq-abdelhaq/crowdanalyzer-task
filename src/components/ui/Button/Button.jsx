import classNames from "classnames";
import classes from "./Button.module.css";

function Button(props) {
  const { children, type, ...rest } = props;

  return (
    <button
      {...rest}
      className={classNames(classes.btn, classes[`btn-${type}`])}
    >
      {children}
    </button>
  );
}

export default Button;
