import React, {useState} from 'react'
import firebase from "../config/firebase"


const SignIn = () => {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


   const handleSubmit = (e) => {
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(res => {
            console.log("signed in!", res)
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <>
         <h1>Sign In</h1>
         <form action="" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">E-mail</label>
               <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
               />
            </div>
            <button type="submit">Sign In</button>
         </form>
         <span>or</span>
         <a href="">Sign Up</a>
      </>
   )
}

export default SignIn