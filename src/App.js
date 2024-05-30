import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { APP_ROUTES } from "./constants/routes";

import MainLayout from "./components/main-layout/MainLayout";

const router = createBrowserRouter(APP_ROUTES);

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
