import React from "react";
import { Banner, Rekomendasi, FlashSale, MiddleCategory, WIB } from "component";
import data from "json/data";


const HomeScreen = () => {
  return (
    <main className="mt-40 lg:w-xl md:mx-5 mx-20 mb-20">
      <Banner data={data.banner} />
      <MiddleCategory />
      <FlashSale />
      <WIB />
      <Rekomendasi title="Rekomendasi" />
    </main>
  );
};

export default HomeScreen;
