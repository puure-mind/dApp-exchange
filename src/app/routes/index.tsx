import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { AppLayout } from "../layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/test"} element={<div>test</div>} />
      </Route>
    </Routes>
  );
};
