import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { BackgroundBeams } from "$/bgbeams";

describe("BackgroundBeams", () => {
  it("renders correctly with default props", () => {
    render(<BackgroundBeams />);
    const container = screen.getByTestId("background-beams");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("absolute h-full w-full inset-0");
  });

  it("applies custom className correctly", () => {
    const customClass = "custom-test-class";
    render(<BackgroundBeams className={customClass} />);
    const container = screen.getByTestId("background-beams");
    expect(container).toHaveClass(customClass);
  });

  it("renders SVG element with correct attributes", () => {
    render(<BackgroundBeams />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "100%");
    expect(svg).toHaveAttribute("height", "100%");
    expect(svg).toHaveAttribute("viewBox", "0 0 696 316");
  });

  it("renders correct number of gradient paths", () => {
    render(<BackgroundBeams />);
    const paths = screen.getAllByTestId("gradient-path");
    // The component has a fixed number of paths defined in the paths array
    expect(paths).toHaveLength(50);
  });

  it("renders correct number of gradient definitions", () => {
    render(<BackgroundBeams />);
    const gradients = screen.getAllByTestId("gradient-def");
    // Should match the number of paths
    expect(gradients).toHaveLength(50);
  });

  it("maintains memoization between renders", () => {
    const { rerender } = render(<BackgroundBeams />);
    const firstRender = screen.getByTestId("background-beams");

    rerender(<BackgroundBeams />);
    const secondRender = screen.getByTestId("background-beams");

    expect(firstRender).toBe(secondRender);
  });
});
