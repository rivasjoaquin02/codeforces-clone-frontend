import { StyleHTMLAttributes } from "react";
import "./StreakChart.css";

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

const StreakChart = ({
    style,
}: {
    style?: StyleHTMLAttributes<HTMLDivElement>["style"];
}) => {
    return (
        <div className="streak-container glass border" style={style}>
            <ul className="month-container">
                {MONTHS.map((month) => (
                    <li key={month} className="month">
                        <span className="month-title">{month}</span>
                        <ul className="days-container">
                            {Array(31)
                                .fill(0)
                                .map((_, i) => (
                                    <li
                                        key={`day${i + 1}`}
                                        className="day"
                                    ></li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StreakChart;
