import {createContext} from 'react'
const noop = ()=> {}
const SendPhonesContext = createContext ({
    phonesList: "", 
    setPhonesList:noop(),
    params:{},
    setParams:noop()
})

export default SendPhonesContext