/**
 * #### Typewriter
 * Typewriter component is a visual effect that creates a dynamic and interactive text animation.
 * It uses motion animations to create a mesmerizing animation of typing text.
 * @param delay - The delay before the animation starts. Defaults to 0.
 * @param texts - An array of strings to be animated.
 * @param baseText - The base text to be animated. Defaults to an empty string.
 * @returns JSX.Element - The rendered Typewriter component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Text as cldText } from ">util/classnames";
import { cn } from ">util/twm";

/**
 * #### Typewriter
 * Typewriter component is a visual effect that creates a dynamic and interactive text animation.
 * It uses motion animations to create a mesmerizing animation of typing text.
 * @param delay - The delay before the animation starts. Defaults to 0.
 * @param texts - An array of strings to be animated.
 * @param baseText - The base text to be animated. Defaults to an empty string.
 * @returns JSX.Element - The rendered Typewriter component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
export interface TypewriterProps {
  delay: number;
  texts: string[];
  baseText?: string;
}

/**
 * #### Typewriter
 * Typewriter component is a visual effect that creates a dynamic and interactive text animation.
 * It uses motion animations to create a mesmerizing animation of typing text.
 * @param delay - The delay before the animation starts. Defaults to 0.
 * @param texts - An array of strings to be animated.
 * @param baseText - The base text to be animated. Defaults to an empty string.
 * @returns JSX.Element - The rendered Typewriter component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
export function Typewriter({
  delay,
  texts,
  baseText = "",
}: TypewriterProps): React.JSX.Element {
  const [animationComplete, setAnimationComplete] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setAnimationComplete(true);
      },
    });
    return () => {
      controls.stop();
    };
  }, [count, baseText.length, delay]);

  return (
    <span className={cldText}>
      <motion.span>{displayText}</motion.span>
      {animationComplete ? (
        <RepeatedTextAnimation delay={delay + 1} texts={texts} />
      ) : null}
      <BlinkingCursor />
    </span>
  );
}

/**
 * #### RepeatedTextAnimation
 * RepeatedTextAnimation component is a visual effect that creates a dynamic and interactive text animation.
 * It uses motion animations to create a mesmerizing animation of typing text.
 * @param delay - The delay before the animation starts. Defaults to 0.
 * @param texts - An array of strings to be animated.
 * @returns JSX.Element - The rendered RepeatedTextAnimation component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
export interface RepeatedTextAnimationProps {
  delay: number;
  texts: string[];
}

const defaultTexts = [
  "need to add Texts",
  "todo: add texts",
  "i forgot to add texts",
  "how about adding some texts",
  "i was too lazy to add texts",
  "i am not sure why i am doing this",
  "this is getting out of hand",
];
function RepeatedTextAnimation({
  delay,
  texts = defaultTexts,
}: RepeatedTextAnimationProps): React.JSX.Element {
  const textIndex = useMotionValue(0);

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const animation = animate(count, 60, {
      type: "tween",
      delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() && latest > 0) {
          updatedThisRound.set(false);
        } else if (!updatedThisRound.get() && latest === 0) {
          textIndex.set((textIndex.get() + 1) % texts.length);
          updatedThisRound.set(true);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [count, delay, textIndex, texts, updatedThisRound]);

  return (
    <motion.span className={cn(cldText, "inline")}>{displayText}</motion.span>
  );
}

/**
 * #### BlinkingCursor
 * BlinkingCursor component is a visual effect that creates a dynamic and interactive cursor animation.
 * It uses motion animations to create a mesmerizing animation of a blinking cursor.
 * @returns JSX.Element - The rendered BlinkingCursor component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function BlinkingCursor(): React.JSX.Element {
  return (
    <motion.div
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-accent"
      variants={cursorVariants}
    />
  );
}
