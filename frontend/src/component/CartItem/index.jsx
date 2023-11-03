import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import * as Ai from 'react-icons/ai';
// import * as Fa from "react-icons/fa";
import number from '@/utils/formatNumber';
import { official_store, star_store } from '@/assets';
// import { addToCart, adjustCart, increase } from "store/actions/CartActions";
import { Button } from '@/parts';
import { removeFromCart } from '@/store/actions/CartActions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // const [input, setInput] = useState(item.qty);
  // const dispatch = useDispatch();

  // const onChangeHandler = (e) => {
  //     const qty = e.target.value;
  //     const itemId = item.id
  //     setInput(qty);
  //     dispatch(adjustCart(itemId, qty));
  // };

  // const increaseHandler = (e) => {
  //   if (input > item.stock) {
  //     setInput(item.stock);
  //   } else {
  //     setInput(e.target.value);
  //     dispatch(increase(item));
  //   }
  // };

  // const decreaseHandler = (e) => {
  //   if (input > 0) {
  //     setInput(e.target.value);
  //     dispatch(increase(item));
  //   } else {
  //     setInput(1);
  //   }
  // };

  const removeFromCartHandler = (id) => {
    console.log('Cart Item: ', id);
    dispatch(removeFromCart(id));
    Swal.fire({
      width: 400,
      text: 'Berhasil Dihapus',
      icon: 'info',
      showCancelButton: false,
    });
  };

  return (
    <div key={item.id} className="my-5 mb-10 flex justify-between">
      <div>
        <div className="flex mb-3">
          <figure className="flex items-start">
            <img
              src={item.isOfficialStore ? official_store : star_store}
              alt="store"
              className="w-5 bg-cover mr-3"
            />
            <figcaption>
              <h3 className="font-semibold">{item.seller}</h3>
              <p className="text-xs text-gray-500">{item.city}</p>
            </figcaption>
          </figure>
        </div>
        <div className="flex">
          <figure className="flex">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={`img_${item.seller}`}
                className="w-24 h-24 bg-cover rounded shadow"
              />
            </Link>
            <figcaption className="flex flex-col ml-5 justify-evenly">
              <p className="text-sm hover:text-primary">
                <Link to={`/product/${item.id}`}>{item.name}</Link>
              </p>
              <h3 className="font-bold">Rp{number(item.price)}</h3>
              <div className="flex items-center">
                {/* <Button
                  className={`p-1 rounded-full ${
                    item.stock > 0
                      ? "text-white bg-red-500 "
                      : "bg-gray-200 text-gray-500"
                  }`}
                  // onClick={decreaseHandler}
                >
                  <Fa.FaMinus size={12} />
                </Button> */}
                <p>
                  <strong>Kuantitas: {item.qty}</strong>
                </p>
                {/* <input
                  className="w-10 text-center border-primary border-0 border-b rounded-none"
                  onChange={onChangeHandler}
                  value={item.qty}
                /> */}
                {/* <Button
                  className={`p-1 rounded-full ${
                    item.stock > 0
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  // onClick={increaseHandler}
                >
                  <Fa.FaPlus size={12} />
                </Button> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="">
        <Button type="button" onClick={() => removeFromCartHandler(item.id)}>
          <Ai.AiOutlineDelete size={24} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
