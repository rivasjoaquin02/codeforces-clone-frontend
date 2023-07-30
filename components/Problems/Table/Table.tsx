import "./Table.css";
import { ProblemDB } from "@/types";
import { ArrowDownUp, User } from "lucide-react";
import Tag from "../../ui/Tag/Tag";

import ButtonRedirect from "@/components/ui/Button/ButtonRedirect";
import Avatar from "@/components/ui/Avatar/Avatar";

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
    return (
        <table className="border glass">
            <thead>
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
                        <td className="tag-container">
                            {problem.tags.map((tag) => (
                                <Tag key={tag}> {tag} </Tag>
                            ))}
                        </td>
                        <td className="table-difficulty">
                            <Tag difficulty={problem.difficulty}>
                                {problem.difficulty}
                            </Tag>
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
