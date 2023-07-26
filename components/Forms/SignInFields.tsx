const signinFields = [
    { value: "username", label: "Username", type: "text", required: true },
    { value: "password", label: "Password", type: "password", required: true },
    { value: "email", label: "Email", type: "email", required: true },
    { value: "fullname", label: "Fullname", type: "text", required: false },
];

const apiroute = "http://localhost:8000";

const SignInForm = () => {
    return (
        <form action={`${apiroute}/auth/signout`} method="POST">
            {signinFields.map((field) => (
                <>
                    <label htmlFor={field.value}> {field.label}</label>
                    <input type={field.type} required={field.required} />
                </>
            ))}
            <button type="submit" className="btn btn-submit border">
                Sign out
            </button>
        </form>
    );
};

export default SignInForm;
