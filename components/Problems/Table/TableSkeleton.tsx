// import "./Table.css";
// import Tag from "../../ui/Tag/Tag";

// import Avatar from "@/components/ui/Avatar/Avatar";

// const TableSkeleton = () => {
//     return (
//         <table className="table border glass">
//             <thead>
//                 <tr>
//                     {Array(4)
//                         .fill(0)
//                         .map((_, idx) => (
//                             <th key={idx}>
//                                 <div className="skeleton skeleton-text-header"></div>
//                             </th>
//                         ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {Array(10)
//                     .fill(0)
//                     .map((_, idx) => (
//                         <tr key={idx}>
//                             <td className="table-title">
//                                 <div className="skeleton skeleton-text"></div>
//                             </td>
//                             <td className="table-tags">
//                                 {Array(5)
//                                     .fill(0)
//                                     .map((_, jdx) => (
//                                         <Tag key={jdx} skeleton />
//                                     ))}
//                             </td>
//                             <td className="table-difficulty">
//                                 <Tag skeleton />
//                             </td>
//                             <td className="table-avatar">
//                                 <Avatar skeleton />
//                             </td>
//                         </tr>
//                     ))}
//             </tbody>
//         </table>
//     );
// };

// export default TableSkeleton;
