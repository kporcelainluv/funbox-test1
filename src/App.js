import React from "react";

import { Product } from "./Product";

const products = [
  {
    productName: "Нямушка",
    productFlavor: "с фуа-гра",
    portions: "10 порций",
    present: "мышь в подарок",
    additionalInfo: "заказчик доволен",
    weight: "0,5",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Печень утки разварная с артишоками"
  }
];

export const App = () => {
  return (
    <section className="container">
      {products.map((product, index) => {
        return <Product key={product.productName + index} props={product} />;
      })}
    </section>
  );
};
