import "./NavBar.css";

import { BookMarked, Bot, Home } from "lucide-react";
import ButtonRedirect from "../Button/ButtonRedirect";
import Avatar from "../Avatar/Avatar";
import DropDown from "../DropDown/DropDown";
import DropDownItem from "../DropDown/DropDownItem";

import { KeyRound, KeySquare } from "lucide-react";
import Button from "../Button/Button";

const WEBSITE_TITLE = "code";
const routes = [
    { value: "home", url: "/", icon: Home },
    { value: "problems", url: "/problems", icon: BookMarked },
    { value: "scoreboard", url: "/scoreboard", icon: Bot },
];

const NavBar = () => {
    // const {session} = useSession();
    const session = undefined;

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
                    {!session ? (
                        <DropDownItem>
                            <Button variant="nav">Logout</Button>
                        </DropDownItem>
                    ) : (
                        <>
                            <DropDownItem>
                                <ButtonRedirect
                                    variant="nav"
                                    redirectUrl="/login"
                                >
                                    <KeyRound size={20} />
                                    Login
                                </ButtonRedirect>
                            </DropDownItem>
                            <DropDownItem>
                                <ButtonRedirect
                                    variant="nav"
                                    redirectUrl="/signin"
                                >
                                    <KeySquare size={20} />
                                    Signin
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
