import React from "react";
import { ShopBox } from "./ShopBox";

export const ShopsSection = (props) => {
  const shops = props.shops.shops;
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