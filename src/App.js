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
    question: "Котэ не одобряет?"
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
    question: "Котэ не одобряет?"
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
    question: "Котэ не одобряет?"
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

const handleOutput = products => {
  let chosen = [];
  let outOfStock = [];
  products.map((product, index) => {
    const name = `${productsList[index].productName} ${productsList[index].productFlavor}`;
    if (product.disabled) {
      outOfStock = [...outOfStock, name];
      return outOfStock;
    } else if (product.checked) {
      chosen = [...chosen, name];
      return chosen;
    }
  });

  return `Пользователь выбрал: ${handleText(chosen)}\nЗакончились: ${handleText(
    outOfStock
  )}`;
};

export const App = () => {
  const [products, updateProducts] = useState([
    { name: "fuaGra", checked: false, disabled: false },
    { name: "fish", checked: true, disabled: false },
    { name: "chicken", checked: false, disabled: true }
  ]);

  const handleCheck = id => {
    updateProducts(products =>
      products.map(product => {
        if (product.name === id) {
          return {
            ...product,
            checked: !product.checked
          };
        }
        return product;
      })
    );
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
              product={product}
              handleCheck={handleCheck}
              checked={products[index].checked}
              disabled={products[index].disabled}
            />
          );
        })}
      </div>

      <button
        className="container__button"
        onClick={() => alert(handleOutput(products))}
      >
        click me!
      </button>
    </section>
  );
};
