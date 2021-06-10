import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cat_1, cat_2, cat_3, cat_4, cat_5, cat_6 } from "assets";
import { Banner, Rekomendasi, FlashSale, WIB } from "component";
import { Loading, MessageBox } from "parts";
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
    <main className="mt-40 lg:w-lg md:mx-5 mx-20 mb-20">
      {loadingBanner ? (
        <Loading />
      ) : bannerError ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Banner banner={banner} />
      )}

      <div className="flex justify-evenly my-12 text-normal">
        <Link to="/" className="bg-middle-category">
          <img src={cat_1} alt="" className="middle-category" />
          <p>Official Store</p>
        </Link>
        <Link to="/" className="bg-middle-category">
          <img src={cat_2} alt="" className="middle-category" />
          <p>Produk Indonesia</p>
        </Link>
        <Link to="/" className="bg-middle-category">
          <img src={cat_6} alt="" className="middle-category" />
          <p>Terlaris</p>
        </Link>
        <Link to="/" className="bg-middle-category">
          <img src={cat_3} alt="" className="middle-category" />
          <p>Top-Up dan Tagihan</p>
        </Link>
        <Link to="/" className="bg-middle-category">
          <img src={cat_5} alt="" className="middle-category scale-125" />
          <p>Promo dan Kupon</p>
        </Link>
        <Link to="/" className="bg-middle-category">
          <img src={cat_4} alt="" className="middle-category" />
          <p>Lihat Semua</p>
        </Link>
      </div>

      {loading ? (
        <Loading>Processing</Loading>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <FlashSale data={products} />
          <WIB data={products}>Produk WIB</WIB>
          <Rekomendasi data={products}>Rekomendasi</Rekomendasi>
        </div>
      )}
    </main>
  );
};

export default HomeScreen;
