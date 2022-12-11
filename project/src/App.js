import HeaderWeb from "./components/header";
import FooterPage from "./components/footer";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import Contacts from "./pages/contacts/contacts";
import Products from "./pages/product/product";
import Guide from "./pages/guide/guide";
import Cart from "./pages/cart/cart";

import LoginForm from "./components/loginform/loginform";
import RegisterForm from "./components/registerform/registerform";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addtoCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <div className="App">
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <HomePage addtoCart={addtoCart} />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <Contacts />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <Products />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/guide"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <Guide />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <Cart cart={cart}/>
                <FooterPage />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <LoginForm />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <HeaderWeb count={cart.length}/>
                <RegisterForm />
                <FooterPage />
              </>
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
