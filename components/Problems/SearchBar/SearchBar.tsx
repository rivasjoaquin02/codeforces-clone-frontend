"use client";

import "./SearchBar.css";
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import ButtonRedirect from "../../ui/Button/ButtonRedirect";

import { useRouter } from "next/navigation";
import Tag from "@/components/ui/Tag/Tag";

export const DIFFICULTIES = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

const SearchBar = ({
    datalist,
    tags,
}: {
    datalist: Array<string>;
    tags?: Array<string>;
}) => {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    return (
        <div className="searchbar box border glass">
            <div className="searchbar-filter">
                <div>
                    <Input
                        value={title}
                        handleChange={setTitle}
                        datalist={datalist}
                    />
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

            <div className="tags-container-slider">
                {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>

            <ButtonRedirect redirectUrl="/problems/create" variant="dashed">
                <Plus size={20} />
                create
            </ButtonRedirect>
        </div>
    );
};

export default SearchBar;
