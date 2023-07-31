export class NotLoggedInException extends Error {
    constructor() {
        super("User is not logged in");
        this.name = "NotLoggedInException";
    }
}
