import React,{useState, useEffect} from 'react'
import firebase from "../config/firebase"


const Room = ({user}) => {


   const [messages, setMessages] = useState([])
   const [content, setContent] = useState("")

   const getDate = new Date()
   const time = getDate.getTime()

   useEffect(() => {
      firebase.firestore().collection("messages").orderBy("time", "asc")
         .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map(doc => {
               return doc.data()
            })
            setMessages(messages)
         })
   }, [])

   const handleSubmit = (e) => {
      e.preventDefault()

      firebase.firestore().collection("messages").add({
         user: user,
         content: content,
         time: time
      })
         .then(function(docRef) {
            console.log("Document written with ID", docRef.id)
            setContent("")
         })
         .catch(function(err) {
            console.log(err)
         })
   }

   const handleSignOut = () => {
      firebase.auth().signOut()
         .then(() => {
            console.log("Signed Out")
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const RenderMessages = messages.map((message, i) => (
      <p key={i}>
         {/* <span></span> */}
         <span>{message.content}</span>
      </p>
   ))

   return (
      <>
         <h1>Room</h1>
         <ul>{RenderMessages}</ul>
         <form onSubmit={handleSubmit}>
            <input 
               type="text"
               value={content}
               onChange={(e) => {setContent(e.target.value)}}
            />
            <button type="submit">SEND</button>
         </form>

         <button onClick={handleSignOut} >
            Sign Out
         </button>
      </>
   )
}

export default Room