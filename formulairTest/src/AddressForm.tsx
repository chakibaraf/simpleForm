import { FormWrapper } from "./FormWrapper";

export function AddressForm(){
    return (
        <FormWrapper title="Address">
        <label htmlFor=""> Street</label>
        <input type="text" />
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">State</label>
        <input type="number"></input>
        <label htmlFor="">Zip</label>
        <input type="number"></input>
        </FormWrapper>
    )
}