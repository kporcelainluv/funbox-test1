import React from "react";

import { Product } from "./Product";

const products = [
  {
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

export const App = () => {
  return (
    <section className="container">
      {products.map((product, index) => {
        return (
          <Product key={product.productName + index} props={product}>
            <span className="product__cta">
              Чего сидишь? Порадуй котэ,{" "}
              <a href="" className="product__link">
                купи
              </a>
              .
            </span>
          </Product>
        );
      })}
    </section>
  );
};
