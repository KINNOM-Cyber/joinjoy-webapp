import { useEffect, useState } from "react";
import ChevronLeftIcon from "~/assets/icons/chevron-left";
import { cn } from "~/utils/tw-merge";

type PaginationTypeProps = {
  currentPage?: number;
  total: number;
  pageLimit: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  onPageChange,
  //   currentPage = 1,
  total,
  pageLimit,
}: PaginationTypeProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / pageLimit);

  useEffect(() => {
    onPageChange?.(page);
  }, [page, onPageChange]);

  const getPaginationRange = (currentPage: number, delta: number = 1) => {
    const range: (number | "...")[] = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);

    if (left > 2) {
      range.push("...");
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) {
      range.push("...");
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const next = () => {
    if (page < totalPages) {
      setPage((v) => v + 1);
    }
  };

  const previous = () => {
    if (page > 0) {
      setPage((v) => v - 1);
    }
  };

  const handlePaginationButtonClick = (item: number | "...") => {
    if (typeof item === "number") {
      setPage(item);
    }
  };

  return (
    <div className="flex items-center space-x-3 text-sm">
      <button
        className="flex items-center justify-center bg-[#646C73] p-3 rounded-sm size-8"
        onClick={previous}
      >
        <ChevronLeftIcon />
      </button>
      {getPaginationRange(page).map((item, i) => (
        <button
          key={i}
          onClick={() => handlePaginationButtonClick(item)}
          className={cn(
            "border-1 border-[#CBD0D5] flex items-center justify-center p-3 rounded-sm size-8 cursor-pointer",
            page == item ? "text-[#3C60BC] border-[#3C60BC]" : ""
          )}
        >
          {item}
        </button>
      ))}
      <button
        className="flex items-center justify-center bg-[#646C73] p-3 rounded-sm size-8"
        onClick={next}
      >
        <ChevronLeftIcon className="-rotate-180" />
      </button>
    </div>
  );
}
