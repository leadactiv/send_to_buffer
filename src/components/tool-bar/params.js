import React, { useContext } from "react"
import SendPhonesContext from "../../context/send-phones.context"

export const Params = () => {
    let sendPhonesContext = useContext(SendPhonesContext)
    const inputChange = (event) =>{
        sendPhonesContext.setParams({
            ...sendPhonesContext.params,
            [event.target.name]:event.target.value
        })
    }
    return (
        <React.Fragment>
            <div className="column">
                <div className="form-group" style={{width: "100%"}}>
                        <h4>Город</h4>
                        <input type="text" className="form-control" name="s_name" onChange={inputChange} placeholder="город" value={sendPhonesContext.params.s_name} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>S_ID</h4>
                        <input type="text" className="form-control" name="s_id" onChange={inputChange} placeholder="s_id" value={sendPhonesContext.params.s_id} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>utm-medium</h4>
                        <input type="text" className="form-control" name="utm_medium" onChange={inputChange} placeholder="utm_medium" value={sendPhonesContext.params.utm_medium} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>utm-source</h4>
                        <input type="text" className="form-control" name="utm_source" onChange={inputChange} placeholder="utm_source" value={sendPhonesContext.params.utm_source} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>utm-content</h4>
                        <input type="text" className="form-control" name="utm_content" onChange={inputChange} placeholder="utm_content" value={sendPhonesContext.params.utm_content} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>utm-term</h4>
                        <input type="text" className="form-control" name="utm_term" onChange={inputChange} placeholder="utm_term" value={sendPhonesContext.params.utm_term} />
                </div>
                <div className="form-group" style={{width: "100%"}}>
                        <h4>utm-campaign</h4>
                        <input type="text" className="form-control" name="utm_campaign" onChange={inputChange} placeholder="utm_campaign" value={sendPhonesContext.params.utm_campaign} />
                </div>
            </div>
        </React.Fragment>
    )
}