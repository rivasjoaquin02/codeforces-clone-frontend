import "./NavBar.css";

import { BookMarked, Bot, Home } from "lucide-react";
import ButtonRedirect from "../Button/ButtonRedirect";
import Avatar from "../Avatar/Avatar";
import DropDown from "../DropDown/DropDown";
import DropDownItem from "../DropDown/DropDownItem";

import { KeyRound, KeySquare } from "lucide-react";

const WEBSITE_TITLE = "code";
const routes = [
    { value: "home", url: "/", icon: Home },
    { value: "problems", url: "/problems", icon: BookMarked },
    { value: "api", url: "/api-reference", icon: Bot },
];

const NavBar = () => {
    const userId = "uysf76s7fsdf";

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
                    <DropDownItem>
                        <ButtonRedirect variant="nav" redirectUrl="/login">
                            <KeyRound size={24} fill="var(--clr-3)" />
                            Login
                        </ButtonRedirect>
                    </DropDownItem>
                    <DropDownItem>
                        <ButtonRedirect variant="nav" redirectUrl="/signin">
                            <KeySquare size={24} fill="var(--clr-3)" />
                            Signin
                        </ButtonRedirect>
                    </DropDownItem>

                    <DropDownItem>
                        <ButtonRedirect variant="nav" redirectUrl="/login">
                            Logout
                        </ButtonRedirect>
                    </DropDownItem>
                </DropDown>
            </div>
        </div>
    );
};

export default NavBar;
