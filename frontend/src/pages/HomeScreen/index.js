import React, { useEffect, useState } from "react";
import { Banner, Rekomendasi, FlashSale, MiddleCategory, WIB } from "component";
import { Loading, MessageBox } from "parts";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "store/actions/ProductActions";
import { listBanner } from "store/actions/BannerActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerList);
  const productList = useSelector((state) => state.productList);
  const { loading: loadingBanner, error: bannerError, banner } = bannerList;
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listBanner());
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <main className="mt-40 lg:w-xl md:mx-5 mx-20 mb-20">
      {loadingBanner ? (
        <Loading />
      ) : bannerError ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Banner banner={banner.data} />
      )}

      <MiddleCategory />

      {loading ? (
        <Loading>Processing</Loading>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <FlashSale data={products.data} />
          <WIB data={products.data}>Produk WIB</WIB>
          <Rekomendasi data={products.data}>Rekomendasi</Rekomendasi>
        </div>
      )}
    </main>
  );
};

export default HomeScreen;
