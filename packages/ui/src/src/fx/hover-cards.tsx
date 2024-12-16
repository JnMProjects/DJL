"use client";

// Credits: https://ui.aceternity.com/

// Docs for dis: https://ui.aceternity.com/components/card-hover-effect

import { cn } from ">util/twm";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomInt = (): number => {
  let result = 1;
  for (let i = 0; i < 5; i++) {
    result *= randomInt(0, 1000);
  }
  return result;
};

/**
 * #### HoverEffect
 * HoverEffect component is a visual effect that creates a dynamic hover interaction for cards.
 * It uses motion animations to create a mesmerizing interaction with the user.
 * @param items - An array of objects containing title, description, href, and bg properties for each card.
 * @param className - Additional classes to be applied to the component.
 * @returns JSX.Element - The rendered HoverEffect component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    description?: string;
    href?: string;
    bg?: string;
  }[];
  className?: string;
}): React.JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4",
        className
      )}
      data-testid="hover-cards-wrapper"
      key="hovereffectfxwrapppper"
    >
      {items.map((item, idx) => (
        <Link
          className="relative group  block p-2 h-full w-full"
          data-testid="hover-effect"
          href={item.href || "#"}
          id={item.title}
          key={item.title || generateRandomInt()}
          onMouseEnter={() => {
            setHoveredIndex(idx);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                initial={{ opacity: 0 }}
                key={item.title ? `${item.title}span` : generateRandomInt()}
                layoutId="hoverBackground"
              />
            )}
          </AnimatePresence>
          <Card
            bg={item.bg}
            forewardkey={item.title}
            key={item.title ? `card${item.title}` : generateRandomInt()}
          >
            {item.title ? (
              <CardTitle
                key={item.title ? `title${item.title}` : generateRandomInt()}
              >
                {item.title}
              </CardTitle>
            ) : null}
            {item.description ? (
              <CardDescription
                key={item.title ? `desc${item.title}` : generateRandomInt()}
              >
                {item.description}
              </CardDescription>
            ) : null}
          </Card>
        </Link>
      ))}
    </div>
  );
};

/**
 * #### Card
 * Card component is a visual representation of a card with a hover effect.
 * It displays an image with a title overlay that becomes visible on hover.
 * @param className - Additional classes to be applied to the component.
 * @param children - The content to be rendered inside the card.
 * @param forewardkey - A unique key to be used for the card.
 * @param bg - The background image URL for the card.
 * @returns JSX.Element - The rendered Card component.
 *
 * @remarks
 * This component is designed to be used within the HoverEffect component.
 * It relies on the hovered state and setHovered function to manage the hover effect.
 */
export const Card = ({
  className,
  children,
  forewardkey,
  bg,
}: {
  className?: string;
  children: React.ReactNode;
  forewardkey?: string;
  bg?: string;
}): React.JSX.Element => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden bg-background/50 glassblur flex items-center justify-evenly border border-accent group-hover:border-secondary relative z-20",
        className
      )}
      key={forewardkey ? `${forewardkey}hoverfxwrapper` : generateRandomInt()}
    >
      {bg ? (
        <Image
          alt={bg || "default image"}
          height={250}
          key={forewardkey ? `${forewardkey}hoverfximage` : generateRandomInt()}
          src={bg || "/default-image.jpg"}
          width={250}
        />
      ) : null}
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

/**
 * #### CardTitle
 * CardTitle component is a text representation of the card title.
 * It is designed to be used within the Card component.
 * @param className - Additional classes to be applied to the component.
 * @param children - The title text to be rendered.
 * @returns JSX.Element - The rendered CardTitle component.
 */
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <h4
      className={cn("text-foreground font-bold tracking-wide mt-1", className)}
    >
      {children}
    </h4>
  );
};

/**
 * #### CardDescription
 * CardDescription component is a text representation of the card description.
 * It is designed to be used within the Card component.
 * @param className - Additional classes to be applied to the component.
 * @param children - The description text to be rendered.
 * @returns JSX.Element - The rendered CardDescription component.
 */
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <p
      className={cn(
        "mt-2 text-foreground/80 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
