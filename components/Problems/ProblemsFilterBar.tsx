"use client";

import { Search, Plus } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import ButtonRedirect from "../ui/Button/ButtonRedirect";

interface Props {
    handleChange: (title?: string, difficulty?: string) => void;
}

export const DIFFICULTIES = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

const ProblemsFilterBar = ({ handleChange }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    return (
        <div className="__problems-search-bar box border">
            <div className="__problems-search-bar-filter">
                <div>
                    <Input value={title} handleChange={setTitle} />
                    <Select
                        title="Difficulty"
                        value={difficulty}
                        handleChange={setDifficulty}
                        options={DIFFICULTIES}
                    />
                </div>
                <Button handleClick={() => handleChange(title, difficulty)}>
                    <Search size={20} />
                </Button>
            </div>
            <ButtonRedirect redirectUrl="/problems/create" variant="primary">
                <Plus size={20} />
                create
            </ButtonRedirect>
        </div>
    );
};

export default ProblemsFilterBar;
