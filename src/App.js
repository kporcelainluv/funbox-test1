import React, { useEffect, useState } from "react";

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
    amount: 10,
    checked: false
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
    amount: 10,
    checked: false
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
    amount: 0,
    checked: false
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
  const [products, updateProducts] = useState(productsList);

  useEffect(() => {
    const updatedProducts = products.map(product => {
      if (product.checked) {
        return { ...product, amount: product.amount - 1 };
      }
      return product;
    });
    updateProducts(updatedProducts);
  }, []);

  const handleCheck = id => {
    updateProducts(products =>
      products.map(product => {
        const amount = product.checked
          ? product.amount + 1
          : product.amount - 1;
        if (product.id === id) {
          return {
            ...product,
            checked: !product.checked,
            amount: amount
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
        {products.map((product, index) => {
          return (
            <Product
              key={product.productName + index}
              product={product}
              handleCheck={handleCheck}
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
