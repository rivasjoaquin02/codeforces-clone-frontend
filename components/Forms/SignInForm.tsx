"use client";

import "./forms.modules.css";

import { Key } from "lucide-react";
import { FormEvent, useState } from "react";
import signinService from "@/services/signin";
import { setToken } from "@/services/session";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

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
            setToken(access_token);
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
            <Input
                id="username"
                value={username}
                handleChange={setUsername}
                required
            />

            <label htmlFor="password"> password </label>
            <Input
                type="password"
                id="password"
                value={password}
                handleChange={setPassword}
                required
            />

            <label htmlFor="email"> email </label>
            <Input id="email" value={email} handleChange={setEmail} required />

            <label htmlFor="fullname"> fullname </label>
            <Input id="fullname" value={fullname} handleChange={setFullname} />
            <Button variant="submit">Sign In</Button>
        </form>
    );
};

export default SignInForm;
