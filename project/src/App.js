import HeaderWeb from "./components/header";
import FooterPage from "./components/footer";
import Login from "./pages/login/login";
import {useEffect} from 'react'

function App() {
  return (
    <div className="App">
      
      <HeaderWeb />
        <Login></Login>
      <FooterPage />
    </div>
  );
}

export default App;
