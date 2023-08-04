"use client";

import "./Table.css";
import { ArrowDownUp, User } from "lucide-react";
import Tag from "../../ui/Tag/Tag";

import ButtonRedirect from "@/components/ui/Button/ButtonRedirect";
import Avatar from "@/components/ui/Avatar/Avatar";
import { ProblemDB } from "@/services/problem/types";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button/Button";

const HEADERS = [
    {
        value: "title",
        label: "Problem Title",
        isSortable: true,
    },

    {
        value: "tags",
        label: "Tags",
        isSortable: false,
    },
    {
        value: "difficulty",
        label: "Difficulty",
        isSortable: true,
    },
    {
        value: "authorId",
        isSortable: false,
        icon: User,
    },
];

interface Props {
    problems: Array<ProblemDB>;
}

const Table = ({ problems }: Props) => {
    const router = useRouter();

    return (
        <table className="table border glass">
            <thead>
                <tr>
                    {HEADERS.map((header) => (
                        <th
                            key={header.value}
                            id={header.value}
                            className="table-header-item"
                        >
                            {header.icon && <header.icon size={20} />}
                            {header.label}
                            {header.isSortable && (
                                <Button
                                    handleClick={() =>
                                        router.push(
                                            `/problems/?sortBy=${header.value}`
                                        )
                                    }
                                    variant="nav"
                                >
                                    <ArrowDownUp size={20} />
                                </Button>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {problems.map((problem) => (
                    <tr key={problem.id} id={problem.id}>
                        <td className="table-title">
                            <ButtonRedirect
                                redirectUrl={`/problems/${problem.id}`}
                                variant="nav"
                            >
                                {problem.title}
                            </ButtonRedirect>
                        </td>
                        <td className="table-tags">
                            {problem.tags.map((tag) => (
                                <Tag variant="normal" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </td>
                        <td className="table-difficulty">
                            <Tag
                                variant="difficulty"
                                mode={problem.difficulty}
                            />
                        </td>
                        <td className="table-avatar">
                            <Avatar />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
