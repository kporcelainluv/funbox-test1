import React from "react";
export const Product = ({ props }) => {
  const {
    productName,
    productFlavor,
    portions,
    present,
    additionalInfo,
    weight,
    description,
    cta,
    ingredients
  } = props;

  return (
    <div className="product">
      <div className="product__border">
        <div className="product__block">
          <span className="product__description">{description}</span>
          <h2 className="product__name">{productName}</h2>
          <h3 className="product__flavor">{productFlavor}</h3>
          <p className="product__info">
            {portions} {present} {additionalInfo}
          </p>
          <img className="product__img" src="" alt="Изображение кота" />
          <span className="product__weight">{weight}</span>
        </div>
        <span className="product__cta">{cta}</span>
      </div>
    </div>
  );
};
