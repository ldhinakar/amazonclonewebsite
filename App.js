import React, { useEffect }from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51NFDIcSGb8ribUWYTkakM9JzNPG4whsztiQ3mVtW83QcP8m2Dg5C6EMVr9kn4HdVvxGlsYqaL7QDsPKlshdcfIK700Zt2NfEsj');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
   <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />

          <Route path="/" element={[<Header />,<Home />]} />

          <Route path="/checkout" element={[<Header />,<Checkout />]} />

          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />
          
          <Route path="/orders" element={[<Header />,<Orders />]} />
        </Routes>
      </div>
   </Router>
  );
}

export default App;
