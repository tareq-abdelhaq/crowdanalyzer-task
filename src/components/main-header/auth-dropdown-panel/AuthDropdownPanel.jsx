import { useState, useRef, useEffect } from "react";

import { useAuth } from "../../../hooks/useAuth";

import LoginForm from "./login-form/LoginForm";
import Button from "../../ui/Button/Button";

import { ReactComponent as KababMenu } from "../../../assets/icons/kabab-menu.svg";
import classes from "./AuthDropdownPanel.module.css";

function AuthDropdownPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownContainerRef = useRef();
  const { isAuthenticated, login, logout } = useAuth();

  function toggleDropdownHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function loginHandler(data) {
    login(data);
    setIsOpen(false);
  }

  function logoutHandler() {
    logout();
    setIsOpen(false);
  }

  useEffect(() => {
    function clickAwayHandler(e) {
      const { target } = e;
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", clickAwayHandler);
    return () => {
      document.removeEventListener("mousedown", clickAwayHandler);
    };
  }, []);

  return (
    <div ref={dropdownContainerRef} className={classes["dropdow-container"]}>
      <button onClick={toggleDropdownHandler}>
        <KababMenu />
      </button>

      {isOpen && (
        <div className={classes["dropdown"]}>
          {isAuthenticated && (
            <Button type="primary" onClick={logoutHandler}>
              Logout
            </Button>
          )}
          {!isAuthenticated && <LoginForm onSubmit={loginHandler} />}
        </div>
      )}
    </div>
  );
}

export default AuthDropdownPanel;
