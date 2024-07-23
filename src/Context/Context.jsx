import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Contexts = createContext();

export const useContexts = () => {
  return useContext(Contexts);
};

export const ContextProvider = ({ children }) => {
  // const dummy = [
  //   {
  //     id: "1",
  //     image: "image",
  //     title: "title",
  //     name: "hi",
  //     price: 321,
  //     discount: 60,
  //     rating: { rate: 3, count: 4 },
  //   },
  // ];
  // const [product, setProduct] = useState(dummy, []);

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkout, setcheckout] = useState([]);
  const [product_Details, setProduct_Details] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [product, setProduct] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/wishlist`)
      .then((wishlists) => setWishlist(wishlists.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (location.pathname !== "/login") {
      navigate({ state: { from: location.pathname } });
    }
  }, [navigate]);

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      setIsAuthenticated(true);
    }
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        setProduct(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const displayedProducts = showAll ? product : product.slice(0, 8);

  const addToWishlist = (product) => {
    axios.post("http://localhost:3001/wishlist", wishlist);
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (id) => {
    axios
      .delete(`http://localhost:3001/wishlist`)
      .then(() => {
        setWishlist(
          (prevWishlist) => prevWishlist.filter((product) => product.id !== id),
          console.log(id)
        );
      })
      .catch((error) => console.error("Error removing from wishlist:", error));
  };

  const toggleWishlist = (product) => {
    if (!isAuthenticated) {
      if (wishlist.find((item) => item.id == product.id)) {
        removeFromWishlist(product.id);
        console.log("remove in the wishlist", product);
      } else {
        addToWishlist(product);
        console.log("add to wishlist", product);
      }
    } else {
      navigate(
        "/login",
        { state: { from: location.pathname } },
        console.log("location", location)
      );
    }
  };

  const addToCart = (product, quantity = 1) => {
    if (!isAuthenticated) {
      setCart((prevCart) => {
        axios.post("http://localhost:3001/cart", cart);
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          axios.post("http://localhost:3001/cart", cart);
          return [...prevCart, { ...product, quantity }];
        }
      });
    } else {
      navigate("/login", {
        state: { from: location.pathname },
      });
    }
  };

  // const addToCart = (product, quantity = 1) => {
  //   if (!isAuthenticated) {
  //     setCart((prevCart) => {
  //       const existingProduct = prevCart.find((item) => item.id === product.id);
  //       if (existingProduct) {
  //         return prevCart.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + quantity }
  //             : item
  //         );
  //       } else {
  //         return [...prevCart, { ...product, quantity }];
  //       }
  //     });
  //   } else {
  //     navigate("/login", {
  //       state: { from: location.pathname },
  //     });
  //   }
  // };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    console.log("remove in the cart");
  };

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const CheckOut = () => {
    if (!isAuthenticated) {
      setcheckout(cart);
    }
  };

  const Product_Details = (product) => {
    setProduct_Details([product]);
    console.log("click to Product_Details");
  };

  const logout = () => {
    localStorage.removeItem("login");
    setIsAuthenticated(false);
    navigate("/login");
    setCart([]);
    setWishlist([]);
    setProduct_Details([]);
    setcheckout([]);
    navigate("/");
  };

  return (
    <Contexts.Provider
      value={{
        product,
        setProduct,
        showAll,
        setShowAll,
        loading,
        setLoading,
        displayedProducts,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        CheckOut,
        checkout,
        setcheckout,
        Product_Details,
        product_Details,
        cartTotal,
        setIsAuthenticated,
        isAuthenticated,
        navigate,
        location,
        logout,
        user,
        setuser,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
