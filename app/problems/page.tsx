import { Problem } from "@/types";
import ProblemsList from "@/components/Problems/ProblemsList";

const API_URL = process.env.API_URL;

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
    return result as Array<Problem>;
};

const ProblemsPage = async () => {
    const problems = await getProblems();

    return <ProblemsList problems={problems} />;
};

export default ProblemsPage;
