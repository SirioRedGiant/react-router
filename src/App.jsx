import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/products/:id" Component={ProductDetailPage} />
          <Route path="/about-us" Component={AboutPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
