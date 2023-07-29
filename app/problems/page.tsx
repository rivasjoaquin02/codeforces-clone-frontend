import { ProblemDB } from "@/types";
import ProblemsList from "@/components/Problems/ProblemsList";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const getProblems = async () => {
    const response = await fetch(`${API_URL}/problems`, {
        next: { revalidate: 10 },
        method: "GET",
        headers: {},
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result as Array<ProblemDB>;
};

const ProblemsPage = async () => {
    const problems = await getProblems();

    return <ProblemsList problems={problems} />;
};

export default ProblemsPage;
