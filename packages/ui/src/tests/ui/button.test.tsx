import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import * as React from "react";
import "@testing-library/jest-dom";
import { Button, buttonVariants } from ">/button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(buttonVariants());
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Destructive</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(buttonVariants({ variant: "destructive" }));
  });

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(buttonVariants({ size: "lg" }));
  });

  it("renders as child when asChild prop is true", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass(buttonVariants());
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button with ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className correctly", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
