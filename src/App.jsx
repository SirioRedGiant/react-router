import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import ProductsPage from "./assets/pages/ProductsPage";
import AboutPage from "./assets/pages/AboutPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/about-us" Component={AboutPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
