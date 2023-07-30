"use client";
import "@/components/Forms/Forms.css";

import { FormEvent, useState } from "react";
import loginService from "@/services/login";
import { storeSession } from "@/services/session";

import { Key } from "lucide-react";

import { redirect } from "next/navigation";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await loginService.login({
                username,
                password,
            });
            storeSession(session);

            setTimeout(() => redirect("/"), 3000);
        } catch (e) {
            setErrorMessage("Wrong Credentials");
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
        }
    };

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
