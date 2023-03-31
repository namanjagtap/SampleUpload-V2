import React, { useState } from "react"
import Login from "./Login"
import useLocalStorage from "../hooks/useLocalStorage"
import Dashbord from "./Dashbord"
import { ContactsProvider } from "../contexts/ContactsProvider"
import { ConversationsProvider } from "../contexts/ConversationsProvider"
import { SocketProvider } from "../contexts/SocketProvider"

export default function App(){
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashbord id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  
  return (
      id ? dashboard : <Login onIdSubmit={setId} />
  )
}