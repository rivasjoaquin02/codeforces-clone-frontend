"use client";

import "./NavBar.css";

import { BookMarked, Bot, Home } from "lucide-react";
import ButtonRedirect from "../Button/ButtonRedirect";
import Avatar from "../Avatar/Avatar";
import DropDown from "../DropDown/DropDown";
import DropDownItem from "../DropDown/DropDownItem";

import { KeyRound, KeySquare, PersonStanding } from "lucide-react";

const WEBSITE_TITLE = "code";
const routes = [
    { value: "home", url: "/", icon: Home },
    { value: "problems", url: "/problems", icon: BookMarked },
    { value: "scoreboard", url: "/scoreboard", icon: Bot },
];

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../Button/Button";

const NavBar = () => {
    const { data: session } = useSession();

    return (
        <div className="navbar-container">
            <div className="navbar glass">
                <div className="navbar-title">
                    <h1>
                        <span>_</span>
                        {WEBSITE_TITLE}
                    </h1>
                </div>
                <nav>
                    <ul className="navbar-items">
                        {routes.map((route) => (
                            <li key={route.value} className="navbar-item">
                                <ButtonRedirect
                                    redirectUrl={route.url}
                                    variant="nav"
                                >
                                    <route.icon size={20} />
                                </ButtonRedirect>
                            </li>
                        ))}
                    </ul>
                </nav>
                <DropDown icon={<Avatar />}>
                    {session ? (
                        <>
                            <DropDownItem>
                                <ButtonRedirect
                                    redirectUrl="/profile"
                                    variant="nav"
                                >
                                    <PersonStanding size={17} />
                                    Profile
                                </ButtonRedirect>
                            </DropDownItem>
                            <DropDownItem>
                                <Button handleClick={signOut}>
                                    <KeyRound size={17} />
                                    Sign Out
                                </Button>
                            </DropDownItem>
                        </>
                    ) : (
                        <>
                            <DropDownItem>
                                <Button handleClick={signIn}>
                                    <KeyRound size={17} />
                                    Sign-In
                                </Button>
                            </DropDownItem>
                            <DropDownItem>
                                <ButtonRedirect
                                    redirectUrl="/register"
                                    variant="nav"
                                >
                                    <KeySquare size={17} />
                                    Register
                                </ButtonRedirect>
                            </DropDownItem>
                        </>
                    )}
                </DropDown>
            </div>
        </div>
    );
};

export default NavBar;
