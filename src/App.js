import React, { useState, useEffect } from 'react';
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Room from "./pages/Room"

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} 
from "react-router-dom"

import firebase from "./config/firebase"




const App = () => {

   const [user, setUser] = useState("")

   useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
            console.log(user)
            console.log(user.email)
            setUser(user.email)
         } else {
            setUser("")
         }
      })
   }, [])

   return (
      <Router>
         <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/room">
               <Room user={user}/>
            </Route>
         </Switch>
         {/* <h2>{user}</h2> */}
      </Router>
   )
}

export default App;
