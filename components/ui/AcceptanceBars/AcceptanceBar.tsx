import { Circle } from "lucide-react";
import "./AcceptanceBar.css";

interface Props {
    amountByCategory: {
        easy: number;
        medium: number;
        hard: number;
    };
}

const AcceptanceBar = ({amountByCategory}: Props) => {
    return (
        <div className="acceptancebar glass border">
            <div className="porcentage-easy">
                <Circle />
                <Circle />
                <span>{amountByCategory.easy}</span>
            </div>
            <div className="porcentage-medium">
                <Circle />
                <Circle />
                <span>{amountByCategory.medium}</span>
            </div>
            <div className="porcentage-hard">
                <Circle />
                <Circle />
                <span>{amountByCategory.hard}</span>
            </div>
        </div>
    );
};

export default AcceptanceBar;
