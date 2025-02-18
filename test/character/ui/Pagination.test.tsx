import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { renderPaginationItems } from "@/feature/character/ui/PaginationExt";

describe("renderPaginationItems", () => {
  it("should render correct pagination items for the first page", () => {
    const handlePageChange = vi.fn();
    const { getAllByTestId } = render(
      <>{renderPaginationItems(1, 10, handlePageChange)}</>
    );

    expect(getAllByTestId("pagination-item").length).toBe(6); // 1, 2, 3, 4, 5, ..., 10
    expect(getAllByTestId("pagination-ellipsis").length).toBe(1);
  });

  it("should render correct pagination items for a middle page", () => {
    const handlePageChange = vi.fn();
    const { getAllByTestId } = render(
      <>{renderPaginationItems(5, 10, handlePageChange)}</>
    );

    expect(getAllByTestId("pagination-item").length).toBe(7); // 1, ..., 3, 4, 5, 6, 7, ..., 10
    expect(getAllByTestId("pagination-ellipsis").length).toBe(2);
  });

  it("should render correct pagination items for the last page", () => {
    const handlePageChange = vi.fn();
    const { getAllByTestId } = render(
      <>{renderPaginationItems(10, 10, handlePageChange)}</>
    );

    expect(getAllByTestId("pagination-item").length).toBe(6); // 1, ..., 6, 7, 8, 9, 10
    expect(getAllByTestId("pagination-ellipsis").length).toBe(1);
  });

  it("should call handlePageChange with correct page number", () => {
    const handlePageChange = vi.fn();
    const { getByText } = render(
      <>{renderPaginationItems(5, 10, handlePageChange)}</>
    );

    getByText("1").click();
    expect(handlePageChange).toHaveBeenCalledWith(1);

    getByText("10").click();
    expect(handlePageChange).toHaveBeenCalledWith(10);
  });
});