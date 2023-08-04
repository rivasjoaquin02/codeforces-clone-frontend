"use client";

import { useState } from "react";
import "./Calendar.css";
import { ArrowDown } from "lucide-react";
import Button from "../Button/Button";

const Calendar = () => {
    const [hide, setHide] = useState(true);

    const currentDay = new Date().getDate();
    // change first day through css variable --first-day

    return (
        <div className="calendar border glass">
            <div className="calendar-header">
                <div>
                    Day <span>{currentDay}</span>
                </div>
                <div className="marquee announcement">
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
            )}
        </div>
    );
};

export default Calendar;
