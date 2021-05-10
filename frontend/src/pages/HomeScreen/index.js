import React, { useEffect, useState } from "react";
import axios from "axios";
import { Banner, Rekomendasi, FlashSale, MiddleCategory, WIB } from "component";
import { Loading, MessageBox } from "parts";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [data1, data2] = await axios.all([
          axios.get("/api/products"), 
          axios.get("/api/banner")
        ]);
        setLoading(false);
        setProducts(data1.data);
        setBanner(data2.data);
        console.log(data1.data);
        console.log(data2.data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="mt-40 lg:w-xl md:mx-5 mx-20 mb-20">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <Banner banner={banner} />
          <MiddleCategory />
          <FlashSale data={products} />
          <WIB data={products}>Produk WIB</WIB>
          <Rekomendasi data={products}>Rekomendasi</Rekomendasi>
        </div>
      )}
    </main>
  );
};

export default HomeScreen;
