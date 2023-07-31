"use client";

import "@/components/ui/Form/Form.css";
import { FormEvent, useCallback, useState } from "react";
import loginService from "@/services/auth/login";

import { Key } from "lucide-react";

// import { redirect } from "next/navigation";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { storeSession } from "@/services/session/session";

export type Field = {
    id: string;
    label: string;
    type: string;
    value: string;
    required?: boolean;
};

// const FIELDS: Field = [
//     {
//         id: "username",
//         label: "Username",
//         type: "text",
//         value: "",
//         required: true,
//     },
//     {
//         id: "password",
//         label: "Password",
//         type: "password",
//         value: "",
//         required: true,
//     },
// ];

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const sessionResult = await loginService({
            username,
            password,
        });
        if (sessionResult.success) {
            storeSession(sessionResult.data);
            // redirect("/");
        } else {
            setErrorMessage(sessionResult.error);
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="glass">
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
                id="password"
                type="password"
                value={password}
                handleChange={setPassword}
                required
            />

            <Button variant="submit">Log In</Button>
        </form>
    );
};

export default LoginPage;
