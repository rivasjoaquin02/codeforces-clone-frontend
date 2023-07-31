import { Circle } from "lucide-react";
import "./AcceptanceBar.css";

const AcceptanceBar = () => {
    return (
        <div className="acceptancebar glass border">
            <div className="porcentage-easy">
                <Circle />
                <Circle />
                <span>42</span>
            </div>
            <div className="porcentage-medium">
                <Circle />
                <Circle />
                <span>20</span>
            </div>
            <div className="porcentage-hard">
                <Circle />
                <Circle />
                <span>15</span>
            </div>
        </div>
    );
};

export default AcceptanceBar;
