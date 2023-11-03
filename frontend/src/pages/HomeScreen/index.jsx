import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Banner, Rekomendasi, FlashSale, WIB } from '@/component';
// import { Loading, MessageBox } from '@/parts';
import { listProducts } from '@/store/actions/ProductActions';
import { listBanner } from '@/store/actions/BannerActions';
import { categoryList } from './const';

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
      {/* {loadingBanner ? (
        <Loading />
      ) : bannerError ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Banner banner={banner} />
      )} */}

      <div className="flex justify-evenly my-12 text-normal">
        {categoryList.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="flex items-center flex-col"
          >
            <img
              src={item.img}
              alt={item.title.toLowerCase()}
              className="mb-2 h-6 w-6"
            />
            <p className="text-xs text-gray-500">{item.title}</p>
          </Link>
        ))}
      </div>

      {/* {loading ? (
        <Loading>Processing</Loading>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <FlashSale data={products} />
          <WIB data={products}>Produk WIB</WIB>
          <Rekomendasi data={products}>Rekomendasi</Rekomendasi>
        </div>
      )} */}
    </main>
  );
};

export default HomeScreen;
