import React from "react";
import Item from "../item";

const Listing = props => {
  const {items} = props;
  return (
    <div className="item-list">
      {items.map(i => {
        return (
          <Item
            key={i.listing_id}
            url={i.url}
            MainImage={i.MainImage}
            title={i.title}
            currency_code={i.currency_code}
            price={i.price}
            quantity={i.quantity}
          />
        );
      })}
    </div>
  );
};

export default Listing;
