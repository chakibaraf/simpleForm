import { FormWrapper } from "./FormWrapper";

export function AccountForm () {

    return(
        <FormWrapper title="Account">
        <label htmlFor="">Email</label>
        <input type="email"></input>
        <label htmlFor="">Password</label>
        <input required type="password"></input>
        </FormWrapper>
    )
}