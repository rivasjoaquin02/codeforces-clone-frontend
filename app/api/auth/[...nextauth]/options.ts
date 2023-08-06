import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export type UserResponse = {
    id: string;
    username: string;
    fullname: string;
    email: string;
    disabled: boolean;
    avatar: string;
    access_token: {
        access_token: string;
        token_type: string;
    };
};

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/signin",
        signOut: "/signout",
    },
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                // console.log(credentials);

                if (!credentials?.username || !credentials.password)
                    return null;

                const user = await axios
                    .post<UserResponse>(
                        `http://127.0.0.1:8000/auth/signin`,
                        new URLSearchParams(credentials)
                    )
                    .then((response) => response.data);

                if (!user) return null;

                return {
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    image: user.avatar,

                    fullname: user.fullname,
                    access_token: user.access_token,
                    disabled: user.disabled,
                };
            },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            // console.log("Session Callback", { session, token });

            return {
                ...session,
                user: {
                    ...session.user,
                    fullname: token.fullname,
                    disabled: token.disabled,
                    access_token: token.access_token,
                },
            };
        },
        jwt: async ({ token, user }) => {
            // console.log("JWT Callback", { token, user });

            if (user) {
                const u = user as UserResponse;
                return {
                    ...token,
                    fullname: u.fullname,
                    disabled: u.disabled,
                    access_token: u.access_token,
                };
            }

            return token;
        },
    },
};
