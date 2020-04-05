import React from "react";

export const Product = ({ props, children }) => {
  const {
    productName,
    productFlavor,
    portions,
    present,
    additionalInfo,
    weight,
    description,
    ingredients
  } = props;

  return (
    <div className="product">
      <div className="product__border">
        <form className="product__block">
          <label>
            <input type="checkbox" />
            <div className="product__description-wrap">
              <span className="product__description">{description}</span>
              <h2 className="product__name">{productName}</h2>
              <h3 className="product__flavor">{productFlavor}</h3>
              <div className="product__info">
                {portions} {present}
                {additionalInfo}
              </div>
            </div>
            <img
              className="product__img"
              src="/img/cat.png"
              alt="Изображение кота"
              height="270px"
              width="320px"
            />
            <div className="product__weight">
              <span>{weight}</span>
              <span>кг</span>
            </div>
          </label>
        </form>
        {children}
      </div>
    </div>
  );
};
