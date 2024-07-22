import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Manu from "./components/Manu";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WishList from "./components/wishList";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import CheckOut from "./components/CheckOut";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Product_Details from "./components/Product_Details";
import { ContextProvider } from "./Context/Context";
import Order from "./components/Order";
import My_order from "./components/My_order";

function App() {
  return (
    <>
      <ContextProvider>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<Manu />} />
            <Route path="/product_details" element={<Product_Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<CheckOut />} />
            <Route path="/cart/checkout/order" element={<Order />} />
            <Route path="/my_order" element={<My_order />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
