import "../styles/products.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { productsList } from "../data/products";
import { Link } from "react-router-dom";
// import Products from "./Products";

const ProductsImg = styled.img`
  &.loaded {
    opacity: 1;
  }
`;

export default function ProductsList({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/MyFruteria.jpg/799px-MyFruteria.jpg?20230218231355",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/MyDelivery.jpg/799px-MyDelivery.jpg?20230218231356",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mypostres.jpg/799px-Mypostres.jpg?20230218231355",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      selectedNewImage(selectedIndex, images);
    }, 5000);
    return () => clearInterval(interval);
  });
  const selectedNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 300);
  };
  const previous = () => {
    selectedNewImage(selectedImage, images, false);
  };
  const next = () => {
    selectedNewImage(selectedImage, images, false);
  };

  return (
    <div className="ProductsList">
      <div className="products-carrousel">
        <ProductsImg
          src={selectedImage}
          alt="error al cargar"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
        <div className="carrousel-button-container">
          <button onClick={previous}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>
      </div>
      <h1 id="Products">Catálogo de Productos</h1>
      <div className="products-catalog">
        {productsList.map((product) => (
          <div className="Products" key={product.id}>
            <div className="product-img-container">
              <img src={product.img} alt={product.title} />
            </div>
            <b>₲{product.price}</b>
            <h1>{product.title}</h1>
            <div className="product-quantity-container">
              <button
                className="shopping-cart-button"
                onClick={() => onAddProduct(product)}
              >
                Añadir al carrito<i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/cart"}>
        <button className="btn-up btn-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </Link>
      <a href="#Header" className="btn-up">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}
