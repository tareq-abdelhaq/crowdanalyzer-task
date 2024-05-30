import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import MainHeader from "../main-header/MainHeader";
import MainContainer from "../main-container/MainContainer";

function MainLayout() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </main>
    </Fragment>
  );
}

export default MainLayout;
