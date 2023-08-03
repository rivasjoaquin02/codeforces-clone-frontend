export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/problems/create", "/problems/[id]/submit", "/profile"],
    // matcher: ["/((?!register|api|login).*)"],
};
