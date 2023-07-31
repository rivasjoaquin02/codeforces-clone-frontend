import "./Calendar.css";

const Calendar = () => {
    const currentDay = new Date().getDate();
    // change first day through css variable --first-day

    return (
        <div className="calendar border glass">
            <div className="calendar-header">
                Day <span>{currentDay}</span>{" "}
            </div>
            <div className="calendar-body">
                <ol>
                    <li className="week-day">S</li>
                    <li className="week-day">M</li>
                    <li className="week-day">T</li>
                    <li className="week-day">W</li>
                    <li className="week-day">T</li>
                    <li className="week-day">F</li>
                    <li className="week-day">S</li>

                    {Array(30)
                        .fill(0)
                        .map((_, i) => {
                            return (
                                <li className="calendar-day" key={i}>
                                    {i + 1}
                                </li>
                            );
                        })}
                </ol>
            </div>
        </div>
    );
};

export default Calendar;
