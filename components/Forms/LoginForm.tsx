const loginFields = [
    { value: "username", label: "Username", type: "text", required: true },
    { value: "password", label: "Password", type: "password", required: true },
];

const apiroute = "http://localhost:8000";

const SignOutForm = () => {
    return (
        <form action={`${apiroute}/auth/signout`} method="POST">
            {loginFields.map((field) => (
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

export default SignOutForm;
