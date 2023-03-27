import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MergeCart from "./pages/MergeCart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<MergeCart />}></Route>
          <Route path="/category/:id"  element={<ProductDetails />}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
