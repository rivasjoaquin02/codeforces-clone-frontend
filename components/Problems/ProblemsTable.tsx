"use client";

import { ProblemDB } from "@/types";
import { ArrowDownUp, Hash, User } from "lucide-react";
import Link from "next/link";
import Tag from "../ui/Tag/Tag";

const HEADERS = [
    {
        value: "id",
        isSortable: false,
        icon: Hash,
    },
    {
        value: "authorId",
        isSortable: false,
        icon: User,
    },
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
];

interface Props {
    problems: Array<ProblemDB>;
}

const ProblemsTable = ({ problems }: Props) => {
    return (
        <table className="border">
            <thead className="__problems-table-header">
                <tr>
                    {HEADERS.map((header) => (
                        <th key={header.value} id={header.value}>
                            <div>
                                {header.icon && <header.icon size={20} />}
                                {header.label}
                                {header.isSortable && <ArrowDownUp size={20} />}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="__problems-table-body">
                {problems.map((problem) => (
                    <tr key={problem.id} id={problem.id}>
                        <td>{problem.id}</td>
                        <td>{problem.authorId}</td>
                        <td>
                            <Link href={`/problems/${problem.id}`}>
                                <h3> {problem.title}</h3>
                            </Link>
                        </td>
                        <td>
                            <div className="tag-container">
                                {problem.tags.map((tag) => (
                                    <Tag key={tag}> {tag} </Tag>
                                ))}
                            </div>
                        </td>
                        <td>easy</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProblemsTable;
