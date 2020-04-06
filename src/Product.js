import React, { useState } from "react";

const getClassName = (name, checked, disabled) => {
  if (checked) {
    return `${name} ${name}--checked`;
  } else if (disabled) {
    return `${name} ${name}--disabled`;
  }
  return name;
};

const handleCTAText = (
  defaultText,
  checked,
  disabled,
  productFlavor,
  ingredients
) => {
  if (checked) {
    return <span className="product__cta">{ingredients}</span>;
  } else if (disabled) {
    return (
      <span className="product__cta product__cta--disabled">
        Печалька, {productFlavor} закончился.
      </span>
    );
  }
  return defaultText;
};

export const Product = ({ props, products, updateProduct, children }) => {
  const [flag, updateFlag] = useState(false);
  const {
    id,
    productName,
    productFlavor,
    portions,
    present,
    additionalInfo,
    weight,
    description,
    ingredients,
    hover
  } = props;

  const checked = products.filter(elm => elm.name === id)[0].checked;
  const disabled = products.filter(elm => elm.name === id)[0].disabled;

  console.log({ flag });
  return (
    <div className="product">
      {/*<svg width="40" height="40">*/}
      {/*  <path*/}
      {/*    d="M23,3.5 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z"*/}
      {/*    fill="none"*/}
      {/*    stroke="black"*/}
      {/*    strokeWidth="6"*/}
      {/*  />*/}
      {/*</svg>*/}
      <div
        className={getClassName("product__border", checked, disabled)}
        onMouseLeave={e => {
          if (checked) {
            updateFlag(true);
          }
        }}
        onMouseEnter={() => {
          updateFlag(false);
        }}
      >
        <form className="product__block">
          <label className="product__label">
            <input
              type="checkbox"
              className="product__input"
              checked={checked}
              disabled={disabled}
              onChange={() => {
                updateProduct(products, id);
              }}
            />

            <div className="product__description-wrap">
              <span
                className={
                  flag ? "product__description--hover" : "product__description"
                }
              >
                {flag ? hover : description}
              </span>
              <h2 className="product__name">{productName}</h2>
              <h3 className="product__flavor">{productFlavor}</h3>
              <div className="product__info">
                {portions} {present}
                {additionalInfo}
              </div>
            </div>

            <picture>
              <source srcSet="./img/cat.webp" />
              <img
                className="product__img"
                src="/img/cat.png"
                alt="Изображение кота"
              />
            </picture>

            <div className={getClassName("product__weight", checked, disabled)}>
              <span>{weight}</span>
              <span>кг</span>
            </div>
          </label>
        </form>
      </div>
      {handleCTAText(children, checked, disabled, productFlavor, ingredients)}
    </div>
  );
};
