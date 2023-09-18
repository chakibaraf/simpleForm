import { FormWrapper } from "./FormWrapper";

export function UserForm (){
    return (
        < FormWrapper title="User Details">
        <label htmlFor=""> First Name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <label htmlFor="">Age</label>
        <input type="number"></input>
        
        </FormWrapper>
    )
}
