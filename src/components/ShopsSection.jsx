import React from "react";
import { ShopBox } from "./ShopBox";

export const ShopsSection = (props) => {
  console.log(props);
  // const shopImg = props.shopImg;
  const shops = props.shops.Shops;
  console.log(shops);
  console.log(typeof (shops));
  return (
    <section className="shops-section">
      <h2>SHOPS</h2>
      <ul className="shops-ul">
        {shops.map((shop) => {
          return (
            <>
              <li className="shop-box-li"><ShopBox shop={shop} /></li>
            </>
          );
        })}
      </ul>
    </section>
  );
};