"use client";

import { Search, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
    handleChange: (title?: string, difficulty?: string) => void;
}

const ProblemsFilterBar = ({ handleChange }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    return (
        <div className="__problems-search-bar box border">
            <div className="__problems-search-bar-filter">
                <div>
                    <input
                        type="text"
                        placeholder="search by title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select
                        title="select difficulty"
                        name="difficulty"
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="">Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button
                    className="btn border"
                    onClick={() => handleChange(title, difficulty)}
                >
                    <Search size={20} />
                </button>
            </div>
            <Link href="/problems/create" className="btn btn-primary border">
                <Plus size={20} />
                create
            </Link>
        </div>
    );
};

export default ProblemsFilterBar;
