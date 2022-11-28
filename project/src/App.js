import HeaderWeb from "./components/header";
import FooterPage from "./components/footer";
import HomePage from "./pages/home/home";

// import LoginForm from "./components/loginform/loginform";
// import RegisterForm from "./components/registerform/registerform";
function App() {
  return (
    <div className="App">
      <HeaderWeb />
        <HomePage></HomePage>
      <FooterPage />
    </div>
  );
}

export default App;
