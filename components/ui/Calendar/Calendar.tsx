"use client";

import "./Calendar.css";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import Button from "../Button/Button";

const Calendar = () => {
    const [hide, setHide] = useState(true);

    const currentDay = new Date().getDate();
    // change first day through css variable --first-day

    return (
        <div className="calendar border glass">
            <div className="calendar__header">
                <div>
                    Day <span>{currentDay}</span>
                </div>
                <div className="marquee">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam necessitatibus deserunt vel sit quae soluta, eos
                        distinctio! Voluptas aliquid debitis non, asperiores
                        deleniti ea? Placeat laudantium nobis facilis iusto
                        quos.
                    </p>
                </div>
                <Button
                    variant="nav"
                    handleClick={() => setHide((prev) => !prev)}
                >
                    <ArrowDown size={24} />
                </Button>
            </div>
            {hide && (
                <div className="calendar__body">
                    <ol>
                        <li className="calendar__weekday">S</li>
                        <li className="calendar__weekday">M</li>
                        <li className="calendar__weekday">T</li>
                        <li className="calendar__weekday">W</li>
                        <li className="calendar__weekday">T</li>
                        <li className="calendar__weekday">F</li>
                        <li className="calendar__weekday">S</li>

                        {Array(30)
                            .fill(0)
                            .map((_, i) => {
                                return (
                                    <li className="calendar__day" key={i}>
                                        {i + 1}
                                    </li>
                                );
                            })}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Calendar;
