import HeaderWeb from "./components/header";
import FooterPage from "./components/footer";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import Contacts from "./pages/contacts/contacts";
import Products from "./pages/product/product";
import Guide from "./pages/guide/guide";

import LoginForm from "./components/loginform/loginform";
import RegisterForm from "./components/registerform/registerform";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderWeb />
                <HomePage />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <HeaderWeb />
                <Contacts />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <HeaderWeb />
                <Products />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/guide"
            element={
              <>
                <HeaderWeb />
                <Guide />
                <FooterPage />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <HeaderWeb />
                <LoginForm />
                <FooterPage />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <HeaderWeb />
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
