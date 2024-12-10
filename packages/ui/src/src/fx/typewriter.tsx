"use client";
// need to add smth because vercel git integration is not working

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { DefaultText } from ">util/className";
import { cn } from ">util/twm";

export interface TypewriterProps {
  delay: number;
  texts: string[];
  baseText?: string;
}

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
    <span className={DefaultText}>
      <motion.span>{displayText}</motion.span>
      {animationComplete ? (
        <RepeatedTextAnimation delay={delay + 1} texts={texts} />
      ) : null}
      <BlinkingCursor />
    </span>
  );
}

export interface RepeatedTextAnimationProps {
  delay: number;
  texts: string[];
}

const defaultTexts = [
  "quiz page with questions and answers",
  "blog Article Details Page Layout",
  "ecommerce dashboard with a sidebar",
  "ui like platform.openai.com....",
  "buttttton",
  "aop that tracks non-standard split sleep cycles",
  "transparent card to showcase achievements of a user",
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
    <motion.span className={cn(DefaultText, "inline")}>
      {displayText}
    </motion.span>
  );
}

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
