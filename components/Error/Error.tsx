import Button from "../ui/Button/Button";
import ButtonRedirect from "../ui/Button/ButtonRedirect";
import "./Error.css";
import { XCircle, RefreshCcw, Key } from "lucide-react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="error-container glass border">
            <div className="error-description">
                <h1>{error.message}</h1>
            </div>
            <div className="error-img">
                <XCircle size={100} />
            </div>
            <div className="error-button">
                {error instanceof Error ? (
                    <ButtonRedirect
                        variant="primary"
                        handleClick={reset}
                        redirectUrl={"/login"}
                    >
                        <Key size={24} />
                        Login
                    </ButtonRedirect>
                ) : (
                    <Button variant="primary" handleClick={reset}>
                        <RefreshCcw size={24} />
                        Try Again
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Error;
