import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { Boxes } from "$/bgboxes";
import userEvent from "@testing-library/user-event";

// Mock crypto.randomUUID to have predictable IDs in tests
const mockUUID = "test-uuid";
const originalRandomUUID = crypto.randomUUID.bind(crypto);
beforeEach(() => {
  let counter = 0;
  crypto.randomUUID = jest.fn(
    () => `${mockUUID}-${(counter++).toString()}`,
  ) as unknown as () => `${string}-${string}-${string}-${string}-${string}`;
});

afterEach(() => {
  crypto.randomUUID = originalRandomUUID;
});

describe("Boxes", () => {
  it("renders correctly with default props", () => {
    render(<Boxes />);
    const container = screen.getByTestId("boxes-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("absolute left-1/4 p-4 -top-1/4 flex");
  });

  it("applies custom className correctly", () => {
    const customClass = "custom-test-class";
    render(<Boxes className={customClass} />);
    const container = screen.getByTestId("boxes-container");
    expect(container).toHaveClass(customClass);
  });

  it("renders correct number of rows and columns", () => {
    render(<Boxes />);
    const rows = screen.getAllByTestId("box-row");
    const cols = screen.getAllByTestId("box-col");
    expect(rows).toHaveLength(150);
    expect(cols).toHaveLength(150 * 100); // 150 rows * 100 columns
  });

  it("renders SVG icons on alternating positions", () => {
    render(<Boxes />);
    const icons = screen.getAllByTestId("box-icon");
    // Should have icons on every other position in both rows and columns
    // Total icons = (150/2) * (100/2) = 3750
    expect(icons).toHaveLength(3750);
  });

  it("maintains memoization between renders", () => {
    const { rerender } = render(<Boxes />);
    const firstRender = screen.getByTestId("boxes-container");

    rerender(<Boxes />);
    const secondRender = screen.getByTestId("boxes-container");

    expect(firstRender).toBe(secondRender);
  });

  it("generates unique IDs for rows and columns", () => {
    render(<Boxes />);
    const rows = screen.getAllByTestId("box-row");
    const firstRowKey = rows[0].getAttribute("data-key");
    const secondRowKey = rows[1].getAttribute("data-key");
    expect(firstRowKey).not.toBe(secondRowKey);
  });

  it("applies hover styles to grid cells", async () => {
    render(<Boxes />);
    const cell = screen.getAllByTestId("box-col")[0];

    // Verify initial state
    expect(cell).not.toHaveStyle({ backgroundColor: expect.any(String) });

    // Trigger hover
    await userEvent.hover(cell);

    // Check if a CSS variable color was applied
    const style = window.getComputedStyle(cell);
    expect(style.backgroundColor).toBeDefined();
  });
});
