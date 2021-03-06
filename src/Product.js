import React, { useState } from "react";

const getClassName = (name, checked, disabled) => {
  if (checked) {
    return `${name} ${name}--checked`;
  }
  if (disabled) {
    return `${name} ${name}--disabled`;
  }
  return name;
};

const CTA = ({ product, checked, disabled, handleCheck }) => {
  const { productFlavor, ingredients } = product;

  if (checked) {
    return <span className="product__cta">{ingredients}</span>;
  }

  if (disabled) {
    return (
      <span className="product__cta product__cta--disabled">
        Печалька, {productFlavor} закончился.
      </span>
    );
  }

  return (
    <span className="product__cta">
      Чего сидишь? Порадуй котэ,
      <button className="product__button" type="button" onClick={handleCheck}>
        купи
      </button>
      .
    </span>
  );
};

const isDisabled = product => product.amount < 1;

export const Product = ({ product, handleCheck, checked }) => {
  const [mouseLeft, setMouseLeft] = useState(false);

  const {
    productFlavor,
    question,
    productName,
    description,
    portions,
    present,
    additionalInfo,
    weight
  } = product;

  const handleOnMouseLeave = () => {
    if (checked) {
      setMouseLeft(true);
    }
  };

  const disabled = isDisabled(product);

  return (
    <div className="product">
      <div
        className={getClassName("product__border", checked, disabled)}
        onMouseLeave={handleOnMouseLeave}
        onMouseEnter={() => setMouseLeft(false)}
      >
        <form className="product__block">
          <label className="product__label">
            <input
              type="checkbox"
              className="product__input"
              checked={checked}
              disabled={disabled}
              onChange={handleCheck}
            />
            <div className="product__description-wrap">
              <span
                className={
                  mouseLeft ? "product__question" : "product__description"
                }
              >
                {mouseLeft ? question : description}
              </span>
              <h3 className="product__name">{productName}</h3>
              <h4 className="product__flavor">{productFlavor}</h4>
              <div className="product__info">
                {portions} {present} {additionalInfo}
              </div>
            </div>
            <picture>
              <source srcSet={"img/cat.webp"} type="image/webp" />
              <img
                className="product__img"
                src={"img/cat.png"}
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
      <CTA
        product={product}
        disabled={disabled}
        checked={checked}
        handleCheck={handleCheck}
      />
    </div>
  );
};
