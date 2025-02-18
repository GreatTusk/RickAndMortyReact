import { PaginationItem, PaginationLink, PaginationEllipsis } from "@/components/ui/pagination"

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
      <PaginationItem key="start">
        <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
      </PaginationItem>
    );
    if (startPage > 2) {
      items.push(<PaginationEllipsis key="ellipsis-start" />);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <PaginationItem key={i}>
        <PaginationLink
          onClick={() => handlePageChange(i)}
          isActive={currentPage === i}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(<PaginationEllipsis key="ellipsis-end" />);
    }
    items.push(
      <PaginationItem key="end">
        <PaginationLink onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return items;
};