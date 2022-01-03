
import React from "react";

export const ShopBox = (props) => {
  const shop = props.shop;
  return (
    <>
      {/* <a href={shop.url} target="_blank" rel="noopener noreferrer"><img className="shop-img-a" src={shop.img_url} alt=""></img></a> */}
      {/* <p>{shop.title}</p> */}
      <a href={shop.url} target="_blank" rel="noopener noreferrer"><img className="shop-img-a" src={shop.img_url} alt=""></img></a>
    </>
  );
};