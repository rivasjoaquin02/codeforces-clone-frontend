"use client";

import "@/components/ui/Form/Form.css";
import { FormEvent, useState } from "react";

// import { redirect } from "next/navigation";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { signIn } from "next-auth/react";

export type Field = {
    id: string;
    label: string;
    type: string;
    value: string;
    required?: boolean;
};

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await signIn("credentials", {
            username,
            password,
            redirect: true,
            callbackUrl: "/",
        });
        // console.log("signin");
    };

    return (
        <form onSubmit={handleSubmit} className="glass">
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

            <Button variant="submit">Sign In</Button>
        </form>
    );
};

export default LoginPage;
