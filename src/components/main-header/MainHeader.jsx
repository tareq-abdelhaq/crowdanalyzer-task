import { Link } from "react-router-dom";

import { APP_PATHS } from "../../constants/routes";

import MainContainer from "../main-container/MainContainer";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as KababMenu } from "../../assets/icons/kabab-menu.svg";
import logo from "../../assets/images/logo.png";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
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
            <button>
              <KababMenu />
            </button>
          </div>
        </div>
      </MainContainer>
    </header>
  );
}

export default MainHeader;
