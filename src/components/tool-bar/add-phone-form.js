import axios from "axios"
import { useContext, useState } from "react"
import SendPhonesContext from "../../context/send-phones.context"

export const AddPhonesForm = () => {
    let sendPhoneContext = useContext(SendPhonesContext)
    const changePhonesList =(event) => {
      sendPhoneContext.setPhonesList(event.target.value)
    }

    const sendLog = () => {
      if (sendPhoneContext.phonesList!="") {
        let data = {
          phones:sendPhoneContext.phonesList.replaceAll('\n', ','),
          ...sendPhoneContext.params
        }
        console.log(data)
        axios.post("http://send-phones.leadactiv.ru/send.php", data).then((response)=>{})
      }
    }
    return(
        <div style={{width: "50%"}}>
                <h4>Cписок номеров</h4>
                <div class="form-group mb-2 mt-2" >
                  <textarea style={{height:"60vh"}} type="text" class="form-control" placeholder="Введите номер или список номеров через enter" id="titleName" onChange={changePhonesList} value={sendPhoneContext.phonesList} />
                </div>
                <button class="btn btn-primary" onClick={sendLog}>Отправить</button>
        </div>
    )
}