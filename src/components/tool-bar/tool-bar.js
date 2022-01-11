import { AddPhonesForm } from "./add-phone-form"
import { Params } from "./params"

export const ToolBar = () =>{
    return (
        <div class="d-flex flex-direction-row justify-content-between m-5">
            <AddPhonesForm />
            <Params />
        </div>
    )
}