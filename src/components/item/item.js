import React from "react";

const Item = props => {
  const {
    url,
    MainImage = " https://picsum.photos/200",
    title,
    currency_code,
    price,
    quantity
  } = props;

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">
          {currency_code}
          {price}
        </p>
        <p className="item-quantity level-medium">{quantity} left</p>
      </div>
    </div>
  );
};

export default Item;
