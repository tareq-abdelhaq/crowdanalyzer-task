import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: null,
  });

  function login(data) {
    setAuth({ isAuthenticated: true, username: data.username });
  }

  function logout() {
    setAuth({ isAuthenticated: false, username: null });
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
