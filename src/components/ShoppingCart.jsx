import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";

export default function ShoppingCart({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const deleteProduct = (product) => {
    const result = allProducts.filter((item) => item.id !== product.id);
    setAllProducts(result);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
  };
  const removeProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setTotal(total - product.price * 1);
      setCountProducts(countProducts - 1);
      return setAllProducts([...products]);
    }
  };
  const addProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * 1);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);
    }
  };

  const removeProductKg = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 0.25 }
          : item
      );
      setTotal(total - product.price * 0.25);
      return setAllProducts([...products]);
    }
  };
  const addProductKg = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 0.25 }
          : item
      );
      setTotal(total + product.price * 0.25);
      return setAllProducts([...products]);
    }
  };
  const isKg = (product) => {
    if (product.title.includes("x kg")) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="ShoppingCart">
      {allProducts.length ? (
        <>
          <div className="title-container">
            <h1>Carrito de compras</h1>
            <div className="total-container">
              <h1>Total: ₲{total.toFixed(3)}</h1>
              <button>Finalizar Compra</button>
            </div>
          </div>
          {allProducts.map((product) => (
            <div className="shoppingcart-card" key={product.id}>
              <div className="product-img-container">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="shopping-quantity-container">
                {isKg(product) ? (
                  <button
                    className="shopping-cart-button-remove"
                    onClick={() => {
                      product.quantity > 0.25
                        ? removeProductKg(product)
                        : deleteProduct(product);
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="shopping-cart-button-remove"
                    onClick={() => {
                      product.quantity > 1
                        ? removeProduct(product)
                        : deleteProduct(product);
                    }}
                  >
                    -
                  </button>
                )}

                <div className="product-quantity">
                  <>
                    {product.quantity}{" "}
                    {product.title.includes("x kg") ? "kg." : "un."}
                  </>
                </div>
                <button
                  className="shopping-cart-button-add"
                  onClick={() => {
                    product.title.includes("x kg")
                      ? addProductKg(product)
                      : addProduct(product);
                  }}
                >
                  +
                </button>
              </div>

              <h1>{product.title}</h1>
              <h1>₲{(product.price * product.quantity).toFixed(3)}</h1>
              <button
                className="delete-product"
                onClick={() => deleteProduct(product)}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="cart-message">
          <h1>
            El carrito está vacío<i class="fa-solid fa-ban"></i>
          </h1>
        </div>
      )}
      <Link to={"/"}>
        <button className="btn-up btn-cart">
        <i class="fa-solid fa-house"></i>
        </button>
      </Link>
      <a href="#Header" className="btn-up">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}
