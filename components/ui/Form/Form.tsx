// "use client";

// import "./Form.css"
// import { Key } from "lucide-react";
// import Button from "../Button/Button";
// import Input from "../Input/Input";
// import Label from "../Label/Label";
// import { Field } from "@/app/(auth)/signin/page";
// import { useReducer } from "react";

// interface FormProps {
//     fields: Array<Field>;
//     handleSubmit: (fields: Array<>) => void;
//     errorMessage: string;
// }

// type Action = {
//     type: string;
//     field: string;
//     value: string;
// };

// const reducer = (state, action: Action) => {
//     switch (action.type) {
//         case "SET_FIELD":
//             return {
//                 ...state,
//                 [action.field]: action.value,
//             };
//     }
// };

// const Form = ({ fields, handleSubmit, errorMessage }: FormProps) => {
//     const [state, dispatch] = useReducer(reducer, INITIAL);

//     return (
//         <form onSubmit={handleSubmit} className="glass">
//             {errorMessage && (
//                 <span className="error-message box border">
//                     <Key size={20} />
//                     {errorMessage}
//                 </span>
//             )}

//             {fields.map((field) => (
//                 <>
//                     <Label id={field.id}>{field.label}</Label>
//                     <Input required={field.required} />
//                 </>
//             ))}

//             <Button variant="submit">Log In</Button>
//         </form>
//     );
// };

// export default Form;
