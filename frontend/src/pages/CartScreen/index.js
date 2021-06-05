import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "component";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Button } from "parts";
import number from "utils/formatNumber";

const CartScreen = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = number(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
  const qty = cartItems.reduce((a, c) => a + c.qty, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.localStorage.removeItem('cartItems');
    // const cartStorage = window.localStorage.getItem('cartItems');
    // console.log('cartStorage', cartStorage)
    // if (productId) {
    //   dispatch(addToCart(productId, qty));
    // }
  }, []);

  const checkoutHandler = () => {
    history.push(`/signin?redirect=shipping`);
  };

  return (
    <div className="lg:w-xl pt-40 mx-20 mb-20">
      {cartItems.length < 1 ? (
        <div className="flex flex-col justify-center items-center">
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
        <div className=" grid grid-cols-12">
          <div className="col-start-1 col-end-8">
            <div className="flex justify-between mb-5">
              <h2 className="text-2xl font-bold mb-2">Keranjang</h2>
              <h3>Hapus</h3>
            </div>
            <div className="border-2"></div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="col-start-9 col-end-13 p-5 border border-gray shadow-md rounded-md h-60">
            <div className="border-0 border-b pb-5">
              <h3 className="font-semibold mb-2">Ringkasan Belanja</h3>
              <div className="flex justify-between text-gray-500 text-sm">
                <p>Total harga ({qty} barang)</p>
                <p>Rp{subtotal}</p>
              </div>
            </div>
            <div className="flex justify-between my-5">
              <h3 className="font-semibold mb-2">Total Harga</h3>
              <h3 className="font-semibold mb-2">Rp{subtotal}</h3>
            </div>
            <Button 
            onClick={checkoutHandler}
            outerClassName="text-center bg-primary w-full py-3 text-white">
              Beli ({qty} barang)
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartScreen);