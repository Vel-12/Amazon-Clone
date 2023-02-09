import React, { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from "./Checkout";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51L7H3nSFR0hvKURXp5gkIjDXtrv2FKfZvmZoTy8y80MDp1og31nF1GAK72j4v0cgbYKciXOBcnnCmDImYEr1Ubbv00cn6eKAVG');

function App() {

  const [{ }, dispatch] = useStateValue();

  //to keep track of who signed in
  useEffect(()=>{
    //will only run once the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('The User Is >>>',authUser);

      if(authUser)
      {
        //the user was logged in or just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else
      {
       //this user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    //BEM Convention
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<><Header /><Home /></>}/>
        <Route path="/checkout" element={<><Header /><Checkout /></>}/>
        <Route path="/orders" element={<><Header /><Orders /></>}/>
        <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}/>
      </Routes>
    </Router>
  );
}

export default App;
