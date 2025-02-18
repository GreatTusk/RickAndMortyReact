import {
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export const renderPaginationItems = (
  currentPage: number,
  totalPages: number,
  handlePageChange: (page: number) => void
) => {
  const items = [];
  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfVisible);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    items.push(
      <PaginationItem key="start" data-testid="pagination-item">
        <PaginationLink
          onClick={() => handlePageChange(1)}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    if (startPage > 2) {
      items.push(
        <PaginationEllipsis
          key="ellipsis-start"
          data-testid="pagination-ellipsis"
        />
      );
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <PaginationItem key={i} data-testid="pagination-item">
        <PaginationLink
          onClick={() => handlePageChange(i)}
          isActive={currentPage === i}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(
        <PaginationEllipsis
          key="ellipsis-end"
          data-testid="pagination-ellipsis"
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        />
      );
    }
    items.push(
      <PaginationItem key="end" data-testid="pagination-item">
        <PaginationLink
          onClick={() => handlePageChange(totalPages)}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return items;
};
