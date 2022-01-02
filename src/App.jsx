import React, { useState, useEffect } from "react";
import "./styles.css";
import Shops from "./shops.json";
import { ShopsSection } from "./components/ShopsSection";
export const App = () => {
  console.log("レンダー");
  const dummy_shop_json = Shops;
  const [shops, setShops] = useState(dummy_shop_json);

  useEffect(() => {
    fetch("https://envy4ielah.execute-api.ap-northeast-1.amazonaws.com/dev/", { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setShops(data)
      })
  }, [])

  return (
    <>
      <ShopsSection shops={shops} />
    </>
  );
};
