import { AccessToken } from "./login";

const setToken = (newToken: AccessToken) => {
    window.localStorage.setItem("access_token", JSON.stringify(newToken));
};

export default { setToken };
