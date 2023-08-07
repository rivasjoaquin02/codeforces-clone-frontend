import { StyleHTMLAttributes } from "react";
import "./ActiveDaysChart.css";

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const ActiveDaysChart = ({
    style,
}: {
    style?: StyleHTMLAttributes<HTMLDivElement>["style"];
}) => {
    return (
        <div className="activedays-container glass border" style={style}>
            <ul className="activedays__months">
                {MONTHS.map((month) => (
                    <li key={month} className="activedays__month">
                        <span>{month}</span>
                        <ul className="activedays__days">
                            {Array(31)
                                .fill(0)
                                .map((_, i) => (
                                    <li
                                        key={`day${i + 1}`}
                                        className="activedays__day"
                                    ></li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActiveDaysChart;
