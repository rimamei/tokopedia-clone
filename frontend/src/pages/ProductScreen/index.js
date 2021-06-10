import React, { useEffect, useState } from "react";
import number from "utils/formatNumber";
import * as Fa from "react-icons/fa";
import { Button, Loading, MessageBox } from "parts";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "store/actions/ProductActions";
import { addToCart } from "store/actions/CartActions";
import { useHistory, withRouter } from "react-router";
import Swal from "sweetalert2";

const ProductScreen = (props) => {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const productDetails = useSelector((state) => state.productDetails);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    document.title = "Tokopedia Clone | Product Detail";
    window.scrollTo(0, 0);
    dispatch(detailProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    const existItem = cartItems.find((x) => x.id === productId);
    if (existItem) {
      const prevQty =
        cartItems[cartItems.findIndex((x) => x.id === productId)].qty;
      if (prevQty + qty > product.stock) {
        Swal.fire({
          width: 400,
          title: "Maaf, Kuantitas barang melebihi stok",
          text: `Ada ${prevQty} barang di keranjangmu dan stok barang ini ${product.stock} buah`,
          icon: "info",
          showCancelButton: false,
        });
      } else {
        Swal.fire({
          width: 400,
          text: `Selamat, ${qty} barang berhasil ditambahkan`,
          icon: "success",
          showCancelButton: false,
        });
        dispatch(addToCart(productId, qty));
      }
    } else {
      Swal.fire({
        width: 400,
        text: `Selamat, ${qty} barang berhasil ditambahkan`,
        icon: "success",
        showCancelButton: false,
      });
      dispatch(addToCart(productId, qty));
    }
  };

  const directToCartHandler = () => {
    const existItem = cartItems.find((x) => x.id === productId);
    if (existItem) {
      if (
        cartItems[cartItems.findIndex((x) => x.id === productId)].qty + qty >
        product.stock
      ) {
        Swal.fire({
          width: 400,
          title: "Maaf, Kuantitas barang melebihi stok",
          text: `Ada ${
            cartItems[cartItems.findIndex((x) => x.id === productId)].qty
          } barang di keranjangmu dan stok barang ini ${product.stock} buah`,
          icon: "info",
          showCancelButton: false,
        });
        history.push("/cart");
      } else {
        Swal.fire({
          width: 400,
          text: `Selamat, ${qty} barang berhasil ditambahkan`,
          icon: "success",
          showCancelButton: false,
        });
        dispatch(addToCart(productId, qty));
        history.push("/cart");
      }
    } else {
      dispatch(addToCart(productId, qty));
      history.push("/cart");
    }
  };

  return (
    <div className="mt-40 mb-20 mx-20">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger" />
      ) : (
        <div className="flex w-full lg:w-lg">
          <figure className="flex-col-1 m-5">
            <img
              className="rounded border w-full"
              src={product.imageId[0].imageUrl}
              alt={product.name}
            />
          </figure>
          <div className="flex-col-2 m-5">
            <h1 className="font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center text-gray-700 mb-5">
              <div className="flex items-center">
                <Fa.FaStar className="text-yellow-500" />
                <p className="font-semibold text-sm">
                  &nbsp;{product.rating}&emsp;
                </p>
              </div>
              <p className="text-sm">
                Ulasan &nbsp;
                <span className="font-semibold">
                  {product.numReviews}&emsp;
                </span>
              </p>
              <p className="text-sm">
                Diskusi &nbsp;
                <span className="font-semibold">25</span>
              </p>
            </div>
            <h1 className="font-bold text-3xl mb-2">
              Rp{number(product.price)}
            </h1>
            <p className="font-semibold">Deskripsi:</p>
            <p className="text-sm">{product.description}</p>
          </div>
          <div className="flex-col-1 m-5 p-5 border shadow rounded overflow-hidden">
            <p className="font-bold">Jumlah yang dibeli</p>
            <div className="flex items-center mb-2">
              {qty <= 1 ? (
                <Button
                  type="button"
                  className="p-1 rounded-full bg-gray-200 text-gray-500"
                >
                  <Fa.FaMinus size={12} />
                </Button>
              ) : (
                <Button
                  type="button"
                  className="p-1 rounded-full text-white bg-red-500"
                  onClick={() => setQty(qty - 1)}
                >
                  <Fa.FaMinus size={12} />
                </Button>
              )}
              <input
                type="number"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                className="min-w-3 w-10 outline-none border-0 border-b rounded-none"
              />
              {qty >= product.stock ? (
                <Button
                  type="button"
                  className="p-1 rounded-full bg-gray-200 text-gray-500"
                >
                  <Fa.FaPlus size={12} />
                </Button>
              ) : (
                <Button
                  type="button"
                  className={`p-1 rounded-full ${
                    product.stock > 0
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  onClick={() => setQty(qty + 1)}
                >
                  <Fa.FaPlus size={12} />
                </Button>
              )}
              {product.stock > 0 ? (
                <>
                  <p className="text-gray-500">&emsp;Stok &nbsp;</p>
                  <span className="font-semibold">{product.stock}</span>
                </>
              ) : (
                <p className="font-semibold text-red-500">&emsp;Produk Habis</p>
              )}
            </div>
            {qty > product.stock && product.stock !== 0 && (
              <p className="text-red-500">Maks. Pembelian {product.stock}</p>
            )}
            {qty <= 0 && (
              <p className="text-red-500">Min. Pembelian 1 barang</p>
            )}
            <p className="text-gray-500 mb-5">
              Subtotal &nbsp;{" "}
              <span className="text-xl font-semibold text-black">
                {qty > product.stock
                  ? number(product.price * product.stock)
                  : number(product.price * qty)}
              </span>
            </p>

            {qty > product.stock || qty < 1 ? (
              <>
                <Button
                  type="button"
                  disabled
                  outerClassName="flex items-center justify-center my-2 w-full py-2 bg-gray-200 text-gray-500"
                >
                  <Fa.FaPlus />
                  &emsp;Keranjang
                </Button>
                <Button
                  type="button"
                  disabled
                  outerClassName="border w-full py-2 text-gray-500 border-gray-500"
                >
                  Beli Langsung
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={addToCartHandler}
                  outerClassName="flex items-center justify-center  my-2 w-full py-2 bg-primary text-white"
                >
                  <Fa.FaPlus />
                  &emsp;Keranjang
                </Button>
                <Button
                  type="button"
                  onClick={directToCartHandler}
                  outerClassName="border w-full py-2 text-primary border-primary"
                >
                  Beli Langsung
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ProductScreen);
