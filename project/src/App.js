import HeaderWeb from "./components/header";
import FooterPage from "./components/footer";

import LoginForm from "./components/loginform/loginform";
import RegisterForm from "./components/registerform/registerform";
function App() {
  return (
    <div className="App">
      
      <HeaderWeb />
        <RegisterForm/>
      <FooterPage />
    </div>
  );
}

export default App;
