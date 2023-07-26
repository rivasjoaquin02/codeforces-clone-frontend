"use client";

import { Problem } from "@/types";
import { ArrowDownUp } from "lucide-react";

const headers = [
    {
        value: "id",
        label: "Id",
        isSortable: false,
    },
    {
        value: "authorId",
        label: "Author",
        isSortable: false,
    },
    {
        value: "title",
        label: "Title",
        isSortable: true,
    },
    {
        value: "difficulty",
        label: "Difficulty",
        isSortable: true,
    },
];

interface Props {
    problems: Array<Problem>;
}

const ProblemsTable = ({ problems }: Props) => {
    return (
        <table className="border">
            <thead className="__problems-table-header">
                <tr>
                    {headers.map((header) => (
                        <th key={header.value} id={header.value}>
                            {header.isSortable && <ArrowDownUp size={20} />}
                            {header.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="__problems-table-body">
                {problems.map((problem) => (
                    <tr key={problem.id} id={problem.id}>
                        <td className="__table_id">{problem.id}</td>
                        <td>{problem.authorId}</td>
                        <td className="__table_title_tags">
                            <h3>{problem.title}</h3>
                            <div>{problem.tags}</div>
                        </td>
                        <td>easy</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProblemsTable;
