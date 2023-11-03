import { Footer, Header } from '@/component';
import { Outlet } from 'react-router-dom';

const GeneralLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default GeneralLayout;
