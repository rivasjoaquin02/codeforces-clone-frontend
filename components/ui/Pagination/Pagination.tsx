"use client";

import "./Pagination.css";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button/Button";

import { ArrowLeft, ArrowRight } from "lucide-react";
interface Props {
    hasPrevPage?: boolean;
    hasNextPage?: boolean;
}

const Pagination = ({ hasPrevPage, hasNextPage }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get("page") ?? "1";
    const per_page = searchParams.get("per_page") ?? "10";

    return (
        <div className="pagination">
            <Button
                disabled={!hasPrevPage}
                handleClick={() => {
                    router.push(
                        `problems/?page=${
                            Number(page) - 1
                        }&per_page=${per_page}`
                    );
                }}
            >
                <ArrowLeft size={24} />
                Prev
            </Button>

            <div className="pagination-page glass border">
                <h3>
                    {page} / {Math.ceil(10 / Number(per_page))}
                </h3>
            </div>

            <Button
                disabled={!hasNextPage}
                handleClick={() => {
                    router.push(
                        `problems/?page=${
                            Number(page) + 1
                        }&per_page=${per_page}`
                    );
                }}
            >
                Next
                <ArrowRight size={24} />
            </Button>
        </div>
    );
};

export default Pagination;
