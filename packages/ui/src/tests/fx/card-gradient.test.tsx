import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { BackgroundGradient } from "$/card-gradient";

describe("BackgroundGradient", () => {
  it("renders correctly with default props", () => {
    render(<BackgroundGradient />);
    const container = screen.getByTestId("card-gradient");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("relative p-[4px] group");
  });

  it("applies custom classNames correctly", () => {
    const customClass = "custom-test-class";
    const customContainerClass = "custom-test-container-class";
    render(
      <BackgroundGradient
        className={customClass}
        containerClassName={customContainerClass}
      />
    );
    const container = screen.getByTestId("card-gradient");
    expect(container).toHaveClass(customContainerClass);
    const mainClass = screen.getByTestId("card-gradient-mainclassnames");
    expect(mainClass).toHaveClass(customClass);
  });

  it("renders children correctly", () => {
    const testChild = "Test Child";
    render(<BackgroundGradient>{testChild}</BackgroundGradient>);
    const child = screen.getByText(testChild);
    expect(child).toBeInTheDocument();
  });

  it("passes animate prop correctly", () => {
    const { rerender } = render(<BackgroundGradient />); // animation is on by default
    const at1 = screen
      .getByTestId("card-gradient-animatetest")
      .getAttribute("data-testisanimate");

    expect(at1).toBe("true");

    rerender(<BackgroundGradient animate={false} />); // overwride that
    const at2 = screen
      .getByTestId("card-gradient-animatetest")
      .getAttribute("data-testisanimate");

    expect(at2).toBe("false");
  });

  it("maintains memoization between renders", () => {
    const { rerender } = render(<BackgroundGradient />);
    const firstRender = screen.getByTestId("card-gradient");

    rerender(<BackgroundGradient />);
    const secondRender = screen.getByTestId("card-gradient");

    expect(firstRender).toBe(secondRender);
  });
});
