import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Context from "./context/Context";

function App() {
  return (
      <Context>
        <BrowserRouter>
          <Header />
          <div>
              <Routes>
                  <Route path='/react-shopping-cart' element={<Home />} />
                  <Route path='/react-shopping-cart/cart' element={<Cart />} />
              </Routes>
          </div>
        </BrowserRouter>
      </Context>
  );
}

export default App;
