import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <div className="antialiased font-body w-[1280px] overflow-hidden">
      <HelmetProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
    </div>
  );
};

export default App;
