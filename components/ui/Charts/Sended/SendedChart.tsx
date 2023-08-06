import { HistoryType } from "@/app/profile/page";
import "./SendedChart.css";

interface Props {
    history: HistoryType;
}

const SendedChart = ({ history }: Props) => {
    return (
        <div className="sendedchart-container glass border">
            <ul className="sendedchart">
                {history.map(({ status }, i) => (
                    <li key={i} className={`solution ${status}`}>
                        {status}
                        <span className="solution-time"> 10 min ago </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SendedChart;
