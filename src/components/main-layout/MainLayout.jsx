import { Outlet } from "react-router-dom";

import MainHeader from "../main-header/MainHeader";
import MainContainer from "../main-container/MainContainer";

import classes from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <main className={classes.main}>
        <MainContainer className={classes["main-content-container"]}>
          <Outlet />
        </MainContainer>
      </main>
    </div>
  );
}

export default MainLayout;
