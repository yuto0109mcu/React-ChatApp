import React, {useState} from 'react'
import firebase from "../config/firebase"

const SignUp = () => {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [name, setName] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(res => {
            res.user.updateProfile({
               displayName: name
            })
         })
         .then(res => {
            console.log("User Created!")
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <>
         <h1>Sign Up</h1>
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
            <div>
               <label htmlFor="name">Name</label>
               <input
                  type="name"
                  id="name"
                  value={name}
                  placeholder="name"
                  onChange={e => setName(e.target.value)}
               />
            </div>
            <button type="submit">Sign Up</button>
         </form>
         <span>or</span>
         <a href="">Sign Up</a>
      </>
   )
}

export default SignUp