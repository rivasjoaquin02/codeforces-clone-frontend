"use client";

import { FormEvent, useState } from "react";
import loginService from "@/services/login";
import sessionService from "@/services/session";
import { Key } from "lucide-react";

import { redirect } from "next/navigation";

const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const access_token = await loginService.login({
                username,
                password,
            });
            sessionService.setToken(access_token);

            setTimeout(() => redirect("/"), 3000);
        } catch (e) {
            setErrorMessage("Wrong Credentials");
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

            <button type="submit" className="btn btn-submit border">
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
