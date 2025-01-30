import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Config from "../Screens/Config/Config";
import { Products } from "../Screens/Products/Products";
import { ROUTES } from "./routes";
import { NotFound } from "../Screens/NotFound/NotFound";
import { FormProvider } from "../context/Form/FormContext";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.CONFIG}
          element={
            <FormProvider>
              <Config />
            </FormProvider>
          }
        />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
