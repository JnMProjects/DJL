import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { HoverEffect } from "$/hover-cards";
import userEvent from "@testing-library/user-event";

describe("HoverEffect", () => {
  it("renders correctly with default props", () => {
    const items = [
      {
        title: "Item 1",
        description: "Description 1",
        href: "/item1",
        bg: "https://example.com/item1.jpg",
      },
      {
        title: "Item 2",
        description: "Description 2",
        href: "/item2",
        bg: "https://example.com/item2.jpg",
      },
      {
        title: "Item 3",
        description: "Description 3",
        href: "/item3",
        bg: "https://example.com/item3.jpg",
      },
    ];
    render(<HoverEffect items={items} />);
    const container = screen.getByTestId("hover-cards-wrapper");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(
      "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4"
    );
  });

  it("renders items correctly", () => {
    const items = [
      {
        title: "Item 1",
        description: "Description 1",
        href: "/item1",
        bg: "https://example.com/item1.jpg",
      },
      {
        title: "Item 2",
        description: "Description 2",
        href: "/item2",
        bg: "https://example.com/item2.jpg",
      },
      {
        title: "Item 3",
        description: "Description 3",
        href: "/item3",
        bg: "https://example.com/item3.jpg",
      },
    ];
    render(<HoverEffect items={items} />);
    expect(screen.getAllByTestId("hover-effect")).toHaveLength(3);
  });

  it("renders item titles correctly", () => {
    const items = [
      {
        title: "Item 1",
        description: "Description 1",
        href: "/item1",
        bg: "https://example.com/item1.jpg",
      },
      {
        title: "Item 2",
        description: "Description 2",
        href: "/item2",
        bg: "https://example.com/item2.jpg",
      },
      {
        title: "Item 3",
        description: "Description 3",
        href: "/item3",
        bg: "https://example.com/item3.jpg",
      },
    ];
    render(<HoverEffect items={items} />);
    items.forEach((item) => {
      const itemTitle = screen.getByText(item.title);
      expect(itemTitle).toBeInTheDocument();
    });
  });

  it("renders item descriptions correctly", () => {
    const items = [
      {
        title: "Item 1",
        description: "Description 1",
        href: "/item1",
        bg: "https://example.com/item1.jpg",
      },
      {
        title: "Item 2",
        description: "Description 2",
        href: "/item2",
        bg: "https://example.com/item2.jpg",
      },
      {
        title: "Item 3",
        description: "Description 3",
        href: "/item3",
        bg: "https://example.com/item3.jpg",
      },
    ];
    render(<HoverEffect items={items} />);
    items.forEach((item) => {
      const itemDescription = screen.getByText(item.description);
      expect(itemDescription).toBeInTheDocument();
    });
  });
});
