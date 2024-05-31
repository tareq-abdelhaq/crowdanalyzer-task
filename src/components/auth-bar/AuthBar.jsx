import { useAuth } from "../../hooks/useAuth";

import classes from "./AuthBar.module.css";

function AuthBar() {
  const { isAuthenticated, username } = useAuth();

  if (!isAuthenticated) {
    return;
  }

  return <div className={classes["auth-bar"]}>Welcome back {username} 👋</div>;
}

export default AuthBar;
