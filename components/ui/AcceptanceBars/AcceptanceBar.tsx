import { CircleIcon } from "lucide-react";
import "./AcceptanceBar.css";

interface Props {
    amountByCategory: {
        easy: number;
        medium: number;
        hard: number;
    };
}

const AcceptanceBar = ({ amountByCategory }: Props) => {
    return (
        <div className="acceptancebar glass border">
            <div className="acceptancebar__easy">
                <CircleIcon />
                <CircleIcon />
                <span>{amountByCategory.easy}</span>
            </div>
            <div className="acceptancebar__medium">
                <CircleIcon />
                <CircleIcon />
                <span>{amountByCategory.medium}</span>
            </div>
            <div className="acceptancebar__hard">
                <CircleIcon />
                <CircleIcon />
                <span>{amountByCategory.hard}</span>
            </div>
        </div>
    );
};

export default AcceptanceBar;
