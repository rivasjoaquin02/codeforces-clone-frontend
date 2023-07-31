"use client";

import Error from "@/components/Error/Error";

const ErrorCreateProblemPage = ({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) => {
    return <Error error={error} reset={reset} />;
};

export default ErrorCreateProblemPage;
