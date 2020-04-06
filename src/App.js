import React, { useState } from "react";

import { Product } from "./Product";

const productsList = [
  {
    id: "fuaGra",
    productName: "Нямушка",
    productFlavor: "с фуа-гра",
    portions: "10 порций",
    present: "мышь в подарок",
    additionalInfo: "",
    weight: "0,5",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Печень утки разварная с артишоками."
  },
  {
    id: "fish",
    productName: "Нямушка",
    productFlavor: "с рыбой",
    portions: "40 порций",
    present: "2 мыши в подарок",
    additionalInfo: "",
    weight: "2",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Головы щучьи с чесноком да свежайшая семгушка."
  },
  {
    id: "chicken",
    productName: "Нямушка",
    productFlavor: "с курой",
    portions: "100 порций",
    present: "5 мышей в подарок",
    additionalInfo: "заказчик доволен",
    weight: "5",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Филе из цыплят с трюфелями в бульоне."
  }
];

const markProduct = (products, id) => {
  return products.map(elm => {
    if (elm.name === id) {
      elm.checked = !elm.checked;
    }
    return elm;
  });
};

const CTAText = ({ updateProducts, products, id }) => {
  return (
    <span className="product__cta">
      Чего сидишь? Порадуй котэ,
      <button
        className="product__button"
        onClick={e => {
          e.preventDefault();
          updateProducts(markProduct(products, id));
        }}
      >
        купи
      </button>
      .
    </span>
  );
};

export const App = () => {
  const [products, updateProducts] = useState([
    { name: "fuaGra", checked: false, disabled: false },
    { name: "fish", checked: true, disabled: false },
    { name: "chicken", checked: false, disabled: true }
  ]);
  const updateProduct = (products, id) => {
    return updateProducts(markProduct(products, id));
  };

  return (
    <section className="container">
      <h1 className="visually-hidden">Страница продажи корма для котов</h1>
      <h2 className="container__heading">Ты сегодня покормил кота?</h2>
      <div className="container__wrap">
        {productsList.map((product, index) => {
          return (
            <Product
              key={product.productName + index}
              props={product}
              products={products}
              updateProduct={updateProduct}
            >
              <CTAText
                id={product.id}
                products={products}
                updateProducts={updateProducts}
              />
            </Product>
          );
        })}
      </div>
    </section>
  );
};
