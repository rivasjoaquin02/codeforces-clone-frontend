import { AccessToken } from "./login";

export const setToken = (newToken: AccessToken) => {
    window.localStorage.setItem("access_token", JSON.stringify(newToken));
};

export const getToken = (): AccessToken => {
    const accessTokenJSON = window.localStorage.getItem("access_token");

    if (!accessTokenJSON)
        throw new Error("There is not Token in the LocalStorage");

    const access_token = JSON.parse(accessTokenJSON);

    return access_token;
};
