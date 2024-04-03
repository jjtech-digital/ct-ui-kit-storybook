import FieldErrorCt from "./FieldError"

export default {
    title: "Example/FieldError"
}
export const FieldError = () =>{
    return (
        <FieldErrorCt errors={{
            missing: true,
            duplicate: true,
            minLength: true,
          }}/>
    )
}