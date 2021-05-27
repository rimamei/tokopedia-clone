import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "component";
import {
  CartScreen,
  HomeScreen,
  SignUpScreen,
  LoginScreen,
  ProductScreen,
} from "pages";
import { useSelector } from "react-redux";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="antialiased font-body w-full overflow-hidden">
      <Router>
        <Header cart={cartItems} />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
