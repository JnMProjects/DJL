"use client";

// Credits: https://ui.aceternity.com/

// Docs for dis: https://ui.aceternity.com/components/focus-cards

import Image from "next/image";
import { memo, useState } from "react";
import { cn } from ">util/twm";
import Link from "next/link";

/**
 * #### Card
 * Card component is a visual representation of a card with a hover effect.
 * It displays an image with a title overlay that becomes visible on hover.
 * @param card - The card data object containing title, src, href, and prefetch.
 * @param index - The index of the card in the parent component.
 * @param hovered - The index of the currently hovered card.
 * @param setHovered - Function to set the index of the hovered card.
 * @returns JSX.Element - The rendered Card component.
 *
 * @remarks
 * This component is designed to be used within the FocusCards component.
 * It relies on the hovered state and setHovered function to manage the hover effect.
 */
export const Card = memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }): React.JSX.Element => (
    <div
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
      data-testid="focus-cards" // Added testid for each card
      onMouseEnter={() => {
        setHovered(index);
      }}
      onMouseLeave={() => {
        setHovered(null);
      }}
    >
      <Link href={card.href} prefetch={card.prefetch}>
        <Image
          alt={card.title}
          className="object-cover absolute inset-0"
          fill
          src={card.src}
        />
      </Link>
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

interface Card {
  title: string;
  src: string;
  href: string;
  prefetch?: boolean;
}

/**
 * #### FocusCards
 * FocusCards component is a container for displaying multiple cards with a hover effect.
 * It manages the state of the hovered card and applies a blur effect to non-hovered cards.
 * @param cards - An array of card data objects.
 * @returns JSX.Element - The rendered FocusCards component.
 *
 * @remarks
 * This component is designed to be used as a self-contained card grid.
 * It can be customized by passing in an array of card data objects.
 *
 * {@link https://ui.aceternity.com/}
 */
export function FocusCards({ cards }: { cards: Card[] }): React.JSX.Element {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full"
      data-testid="focus-card-wrapper"
    >
      {cards.map((card, index) => (
        <Card
          card={card}
          hovered={hovered}
          index={index}
          key={card.title}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
