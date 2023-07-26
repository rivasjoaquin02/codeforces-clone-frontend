import Image from "next/image";
import Link from "next/link";

import { Code2, Home, BookMarked, Bot } from "lucide-react";

const WebSiteName = "Codeforces Clone";
const routes = [
    { value: "home", label: "Home", route: "/", icon: Home },
    {
        value: "problems",
        label: "Problems",
        route: "/problems",
        icon: BookMarked,
    },
    { value: "api", label: "Api", route: "/api-reference", icon: Bot },
];

const user_avatar = "/avatar.jpg";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="__navbar-title">
                    <Code2 size={32} />
                    <h1>{WebSiteName}</h1>
                </div>
                <nav className="__navbar-nav">
                    {routes.map((route) => (
                        <Link
                            key={route.value}
                            id={route.value}
                            href={route.route}
                        >
                            <route.icon size={20} />
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="avatar">
                    <Image
                        alt="user avatar"
                        width={34}
                        height={34}
                        src={user_avatar}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
