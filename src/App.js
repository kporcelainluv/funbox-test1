import React, { useState } from "react";

import { Product } from "./Product";
const productsList = [
  {
    id: "fuaGra",
    productName: "Нямушка",
    productFlavor: "с фуа-гра",
    portions: "10 порций",
    present: "мышь в подарок",
    weight: "0,5",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Печень утки разварная с артишоками.",
    question: "Котэ не одобряет?",
    amount: 10
  },
  {
    id: "fish",
    productName: "Нямушка",
    productFlavor: "с рыбой",
    portions: "40 порций",
    present: "2 мыши в подарок",
    weight: "2",
    description: "Сказочное заморское явство",
    cta: "Чего сидишь? Порадуй котэ, купи.",
    ingredients: "Головы щучьи с чесноком да свежайшая семгушка.",
    question: "Котэ не одобряет?",
    amount: 10
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
    ingredients: "Филе из цыплят с трюфелями в бульоне.",
    question: "Котэ не одобряет?",
    amount: 0
  }
];

const handleText = list => {
  return list.reduce((arr, elm, index) => {
    if (index === list.length - 1) {
      arr += elm;
      return arr;
    } else {
      arr += `${elm}, `;
      return arr;
    }
  }, "");
};

const isChecked = (products, id) => products.some(p => p.id === id);

const handleOutput = products => {
  let chosen = [];
  let outOfStock = [];
  let left = [];

  products.map(product => {
    const name = `${product.productName} ${product.productFlavor}`;
    left = [...left, `${name}: ${product.amount}`];

    if (product.amount < 1) {
      outOfStock = [...outOfStock, name];
      return outOfStock;
    } else if (product.checked) {
      chosen = [...chosen, name];
      return chosen;
    }
    return product;
  });

  return `Пользователь выбрал: ${handleText(chosen)}
  \nОстаток: ${handleText(left)}
  \nНет в наличие: ${handleText(outOfStock)}`;
};

export const App = () => {
  const [selectedProducts, updateSelectedProducts] = useState([]);

  const handleSelect = id =>
    updateSelectedProducts(products => [...products, id]);

  const handleDeselect = id =>
    updateSelectedProducts(products => products.filter(p => p.id !== id));

  return (
    <section className="container">
      <h1 className="visually-hidden">Страница продажи корма для котов</h1>
      <h2 className="container__heading">Ты сегодня покормил кота?</h2>
      <div className="container__wrap">
        {productsList.map(product => {
          const id = product.id;
          const checked = isChecked(selectedProducts, id);

          return (
            <Product
              key={id}
              product={product}
              handleCheck={() => {
                if (checked) {
                  handleDeselect(id);
                } else {
                  handleSelect(id);
                }
              }}
              checked={checked}
            />
          );
        })}
      </div>
      <button
        className="container__button"
        onClick={() => {
          alert(handleOutput(products));
        }}
      >
        get balance
      </button>
    </section>
  );
};
