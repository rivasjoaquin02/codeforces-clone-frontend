"use client";

import "@/components/ui/Form/Form.css";

import { Key } from "lucide-react";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import registerService from "@/services/auth/register";

import { signIn } from "next-auth/react";

const SignInForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userResult = await registerService({
            username,
            password,
            email,
            fullname,
        });

        console.log(userResult);
        

        if (!userResult.success) {
            setErrorMessage(userResult.error);
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
            return;
        }

        await signIn("credentials", {
            username,
            password,
            redirect: true,
            callbackUrl: "/",
        });
    };

    return (
        <form className="glass" onSubmit={handleSubmit}>
            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}
            <label htmlFor="username"> username </label>
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
            <Button variant="submit">
                <Key size={20} />
                Register
            </Button>
        </form>
    );
};

export default SignInForm;
