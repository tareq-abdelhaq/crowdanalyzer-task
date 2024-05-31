import { Link, useLocation } from "react-router-dom";

import { APP_PATHS } from "../../constants/routes";

import { AuthContextProvider } from "../../context/AuthContext";
import AuthBar from "../auth-bar/AuthBar";
import MainContainer from "../main-container/MainContainer";
import AuthDropdownPanel from "./auth-dropdown-panel/AuthDropdownPanel";
import CategoriesSlider from "../categories-slider/CategoriesSlider";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import logo from "../../assets/images/logo.png";

import classes from "./MainHeader.module.css";

function MainHeader() {
  const { pathname } = useLocation();
  const isInHomePage = pathname === APP_PATHS.HOME;

  return (
    <AuthContextProvider>
      <AuthBar />
      <header className={classes.header}>
        <MainContainer>
          <div className={classes["header_content"]}>
            <Link to={APP_PATHS.HOME} className={classes["header_logo"]}>
              <img src={logo} alt="stc logo" />
              Game Store
            </Link>

            <div className={classes["header_controls"]}>
              <button>
                <SearchIcon />
              </button>
              <AuthDropdownPanel />
            </div>
          </div>
        </MainContainer>
      </header>
      {isInHomePage && <CategoriesSlider />}
    </AuthContextProvider>
  );
}

export default MainHeader;
