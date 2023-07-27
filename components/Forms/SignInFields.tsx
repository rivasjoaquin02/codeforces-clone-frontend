"use client";

import { Key } from "lucide-react";
import { FormEvent, useState } from "react";
import signinService from "@/services/signin";
import sessionService from "@/services/session";

const signinFields = [
    { value: "username", label: "Username", type: "text", required: true },
    { value: "password", label: "Password", type: "password", required: true },
    { value: "email", label: "Email", type: "email", required: true },
    { value: "fullname", label: "Fullname", type: "text", required: false },
];

const apiroute = "http://localhost:8000";

const SignInForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const access_token = await signinService.signin({
                username,
                password,
                email,
                fullname,
            });
            sessionService.setToken(access_token);
        } catch (e) {
            // if (e instanceof Error) {
            //     setErrorMessage(e.message);
            // } else {
                setErrorMessage("An unknown error occurred");
            // }
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && (
                <span className="error-message box border">
                    <Key size={20} />
                    {errorMessage}
                </span>
            )}

            <label htmlFor="username"> Username </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                required
            />

            <label htmlFor="password"> password </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
            />

            <label htmlFor="email"> email </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
            />

            <label htmlFor="fullname"> fullname </label>
            <input
                type="fullname"
                id="fullname"
                value={fullname}
                onChange={({ target }) => setFullname(target.value)}
                required
            />

            <button type="submit" className="btn btn-submit border">
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
