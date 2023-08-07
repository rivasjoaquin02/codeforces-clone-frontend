import "./Table.css";
import TagSkeleton from "@/components/ui/Tag/TagSkeleton";
import AvatarSkeleton from "@/components/ui/Avatar/AvatarSkeleton";

const TableSkeleton = () => {
    return (
        <table className="table border glass">
            <thead>
                <tr>
                    {Array(4)
                        .fill(0)
                        .map((_, idx) => (
                            <th key={idx}>
                                <div className="skeleton skeleton-text-header"></div>
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {Array(10)
                    .fill(0)
                    .map((_, idx) => (
                        <tr key={idx}>
                            <td className="table-title">
                                <div className="skeleton skeleton-text"></div>
                            </td>
                            <td className="table-tags">
                                {Array(5)
                                    .fill(0)
                                    .map((_, jdx) => (
                                        <TagSkeleton key={`tag-${jdx}`} />
                                    ))}
                            </td>
                            <td className="table-difficulty">
                                <TagSkeleton />
                            </td>
                            <td className="table-avatar">
                                <AvatarSkeleton />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default TableSkeleton;
