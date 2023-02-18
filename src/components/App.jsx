import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route
              path="/"
              element={
                <ProductsList
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
