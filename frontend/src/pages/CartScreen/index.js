import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "component";
import { Link } from "react-router-dom";
import { Button } from "parts";


const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.localStorage.removeItem('cartItems');
    // const cartStorage = window.localStorage.getItem('cartItems');
    // console.log('cartStorage', cartStorage)
    // if (productId) {
    //   dispatch(addToCart(productId, qty));
    // }
  }, []);

  return (
    <div className="lg:w-xl grid grid-cols-12 pt-40 mx-20 mb-20">
      {cartItems.length < 1 ? (
        <div className="col-start-1 col-end-13 flex flex-col justify-center items-center">
          <img src="/images/cart/cart.jpg" alt="anm_cart" />
          <h1 className="text-xl font-bold mt-5">
            Wah, Keranjang belanjamu kosong
          </h1>
          <p className="mb-5">
            Yuk, isi dengan barang-barang yang ingin kamu beli
          </p>
          <Button outerClassName="bg-primary text-white px-10 py-2">
            <Link to="/">Mulai Belanja</Link>
          </Button>
        </div>
      ) : (
        <div className="col-start-1 col-end-8">
          <div className="flex justify-between mb-5">
            <h2 className="text-2xl font-bold mb-2">Keranjang</h2>
            <h3>Hapus</h3>
          </div>
          <div className="border-2"></div>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartScreen;
