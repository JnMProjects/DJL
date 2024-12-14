import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { Custom, SpringNumbers } from "$/spring-numbers"; // Adjust the import path as necessary

describe("Custom Component", () => {
  it("renders correctly with default props", () => {
    render(<Custom value={100} />);
    const animatedNumber = screen.getByTestId("animated-number");
    expect(animatedNumber).toBeInTheDocument();
    expect(animatedNumber).toHaveTextContent("100"); // Default formatting
  });

  it("applies custom formatting function", () => {
    const format = (num: number) => `$${num.toFixed(2)}`;
    render(<Custom value={100} format={format} />);
    const animatedNumber = screen.getByTestId("animated-number");
    expect(animatedNumber).toHaveTextContent("$100.00");
  });

  it("calls onAnimationStart when animation starts", () => {
    const onAnimationStart = jest.fn();
    render(<Custom value={100} onAnimationStart={onAnimationStart} />);
    expect(onAnimationStart).toHaveBeenCalled();
  });

  it("calls onAnimationComplete when animation completes", async () => {
    const onAnimationComplete = jest.fn();
    render(<Custom value={100} onAnimationComplete={onAnimationComplete} />);
    // Simulate a value change to trigger the animation completion
    // This may require a more complex setup depending on your animation logic
    expect(onAnimationComplete).toHaveBeenCalled();
  });
});

describe("SpringNumbers Component", () => {
  it("renders correctly with default props", () => {
    render(<SpringNumbers value={200} />);
    const animatedNumber = screen.getByTestId("animated-number");
    expect(animatedNumber).toBeInTheDocument();
    expect(animatedNumber).toHaveTextContent("200"); // Default formatting
  });

  it("calls onAnimationStart and onAnimationComplete", () => {
    const onAnimationStart = jest.fn();
    const onAnimationComplete = jest.fn();
    render(
      <SpringNumbers
        value={200}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
      />
    );

    expect(onAnimationStart).toHaveBeenCalled();
    expect(onAnimationComplete).toHaveBeenCalled(); // This may need to be adjusted based on animation timing
  });
});
