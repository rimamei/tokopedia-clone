import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "component";
import { CartScreen, HomeScreen, SignUpScreen, LoginScreen, ProductScreen } from "pages";

const App = () => {
  return (
    <div className="antialiased font-body w-full h-full overflow-hidden">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/:id" component={ProductScreen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
