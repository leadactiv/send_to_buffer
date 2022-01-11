import axios from "axios"
import { useState } from "react"

export const  useSendPhones = () => {
  const [phonesList, setPhonesList] = useState("")
  const [params, setParams] = useState({})

  const sendPhones = () => {
    
  }

  return {phonesList, setPhonesList, params, setParams}
}