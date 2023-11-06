import { ProductListContext } from "./store/context";
import { useContext } from "react";
import "../style/Product.css";
export default function ProductSelector() {
  const productValue = useContext(ProductListContext);

  const products = [
    {
      name: "상품1",
      price: 1000,
    },
    {
      name: "상품2",
      price: 1200,
    },
    {
      name: "상품3",
      price: 1002300,
    },
  ];

  const deleteToCart = (item) => {
    const updatedCart = productValue.add.filter((product) => product !== item);
    productValue.setAdd(updatedCart);
  };

  const price = productValue.add.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const addToCart = (product) => {
    productValue.setAdd([...productValue.add, product]);
  };
  return (
    <>
      <div>
        <h1>상품목록</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.price}원</span>
              <button onClick={() => addToCart(product)}>
                장바구니에 추가
              </button>
            </li>
          ))}
        </ul>

        <h2>장바구니</h2>
        <ul>
          {productValue.add.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button onClick={() => deleteToCart(item)}>
                장바구니에서 삭제
              </button>
            </li>
          ))}
        </ul>

        <h2>총금액:</h2>
        {price}
      </div>
    </>
  );
}
