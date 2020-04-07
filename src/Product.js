import React, { useState } from "react";

const getClassName = (name, checked, disabled) => {
  if (checked) {
    return `${name} ${name}--checked`;
  } else if (disabled) {
    return `${name} ${name}--disabled`;
  }
  return name;
};

const CTA = ({
  checked,
  disabled,
  productFlavor,
  ingredients,
  handleCheck,
  id
}) => {
  if (checked) {
    return <span className="product__cta">{ingredients}</span>;
  } else if (disabled) {
    return (
      <span className="product__cta product__cta--disabled">
        Печалька, {productFlavor} закончился.
      </span>
    );
  }
  return (
    <span className="product__cta">
      Чего сидишь? Порадуй котэ,
      <button
        className="product__button"
        onClick={e => {
          e.preventDefault();
          handleCheck(id);
        }}
      >
        купи
      </button>
      .
    </span>
  );
};

export const Product = ({ product, handleCheck }) => {
  const [mouseLeft, handleMouseLeft] = useState(false);

  const {
    id,
    productFlavor,
    ingredients,
    question,
    productName,
    description,
    portions,
    present,
    additionalInfo,
    weight,
    checked,
    amount
  } = product;

  const disabled = !amount > 0;

  const handleOnMouseLeave = checked => {
    if (checked) {
      handleMouseLeft(true);
    }
  };

  return (
    <div className="product">
      <div
        className={getClassName("product__border", checked, disabled)}
        onMouseLeave={() => handleOnMouseLeave(checked)}
        onMouseEnter={() => handleMouseLeft(false)}
      >
        <form className="product__block">
          <label className="product__label">
            <input
              type="checkbox"
              className="product__input"
              checked={checked}
              disabled={disabled}
              onChange={() => handleCheck(id)}
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
        checked={checked}
        disabled={disabled}
        productFlavor={productFlavor}
        ingredients={ingredients}
        handleCheck={handleCheck}
        id={id}
      />
    </div>
  );
};
