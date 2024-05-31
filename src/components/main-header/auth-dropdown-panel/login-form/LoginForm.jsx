import { useRef, useState } from "react";

import Button from "../../../ui/Button/Button";
import Error from "../../../ui/error/Error";

import classes from "./LoginForm.module.css";

function LoginForm(props) {
  const { onSubmit } = props;

  const [loginError, setLoginError] = useState("");

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    setLoginError("");

    const data = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    if (data.username.trim() === "" || data.password.trim() === "") {
      setLoginError("Invalid username/password");
      return;
    }

    onSubmit(data);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameInputRef} required />
      </div>
      <p className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordInputRef} required />
      </p>

      {loginError && (
        <Error message={loginError} className={classes["login-error"]} />
      )}

      <p className={classes.actions}>
        <Button type="primary">Login</Button>
      </p>
    </form>
  );
}

export default LoginForm;
