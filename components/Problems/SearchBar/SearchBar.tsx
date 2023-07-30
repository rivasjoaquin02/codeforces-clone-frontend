"use client";

import "./SearchBar.css";
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import ButtonRedirect from "../../ui/Button/ButtonRedirect";

import { useRouter } from "next/navigation";

export const DIFFICULTIES = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

const SearchBar = () => {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    return (
        <div className="searchbar box border glass">
            <div className="searchbar-filter">
                <div>
                    <Input value={title} handleChange={setTitle} />
                    <Select
                        title="Difficulty"
                        value={difficulty}
                        handleChange={setDifficulty}
                        options={DIFFICULTIES}
                    />
                </div>
                <Button
                    handleClick={() =>
                        router.push(
                            `/problems/?title=${title}&difficulty=${difficulty}`
                        )
                    }
                >
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

export default SearchBar;
