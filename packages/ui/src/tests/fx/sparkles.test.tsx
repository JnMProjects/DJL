import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { SparklesCore } from "$/sparkles"; // Adjust the import path as necessary

describe("SparklesCore", () => {
  it("renders correctly with default props", () => {
    render(<SparklesCore />);
    const container = screen.getByTestId("sparkles-container"); // Ensure you have a test ID in your component
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("opacity-0"); // Initial class for animation
  });

  it("applies custom className correctly", () => {
    const customClass = "custom-sparkles-class";
    render(<SparklesCore className={customClass} />);
    const container = screen.getByTestId("sparkles-container");
    expect(container).toHaveClass(customClass);
  });

  it("renders particles when initialized", async () => {
    render(<SparklesCore />);
    const particles = await screen.findByTestId("particles-container"); // Ensure you have a test ID for particles
    expect(particles).toBeInTheDocument();
  });

  it("applies background color correctly", () => {
    const backgroundColor = "#ff0000";
    render(<SparklesCore background={backgroundColor} />);
    const particles = screen.getByTestId("particles-container");
    expect(particles).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  it("renders with custom particle size", () => {
    render(<SparklesCore particleSize={5} />);
    const particles = screen.getByTestId("particles-container");
    expect(particles).toHaveAttribute("data-particle-size", "5"); // Assuming you set this attribute in your component
  });

  it("maintains memoization between renders", () => {
    const { rerender } = render(<SparklesCore />);
    const firstRender = screen.getByTestId("sparkles-container");

    rerender(<SparklesCore />);
    const secondRender = screen.getByTestId("sparkles-container");

    expect(firstRender).toBe(secondRender);
  });
});
