"use client";

import type { FC } from "react";
import { useRef } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { Text as cldText } from ">util/classnames";
import { cn } from ">util/twm";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "popIn"
  | "shiftInUp"
  | "rollIn"
  | "whipIn"
  | "whipInUp"
  | "calmInUp";

/**
 * #### TextAnimateProps
 * Interface for defining properties of the TextAnimate component.
 * @param text - The text to be animated.
 * @param type - The type of animation to be applied. Defaults to "whipInUp".
 * @param delay - The delay before the animation starts. Defaults to 0.
 * @param duration - The duration of the animation. Defaults to 0.
 * @param className - Additional classes to be applied to the component.
 */
interface TextAnimateProps extends HTMLMotionProps<"div"> {
  text: string;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animationVariants = {
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
      }),
    },
    child: {
      visible: {
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: { opacity: 0, y: 10 },
    },
  },
  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 20 },
    },
  },
  popIn: {
    container: {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
      },
    },
    child: {
      visible: {
        opacity: 1,
        scale: 1.1,
        transition: { type: "spring", damping: 15, stiffness: 400 },
      },
      hidden: { opacity: 0, scale: 0 },
    },
  },
  calmInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.125, 0.92, 0.69, 0.975], //  Drawing attention to dynamic content or interactive elements, where the animation needs to be engaging but not abrupt
          duration: 0.75,
          //   ease: [0.455, 0.03, 0.515, 0.955], // smooth and gradual acceleration followed by a steady deceleration towards the end of the animation
          //   ease: [0.115, 0.955, 0.655, 0.939], // smooth and gradual acceleration followed by a steady deceleration towards the end of the animation
          //   ease: [0.09, 0.88, 0.68, 0.98], // Very Gentle Onset, Swift Mid-Section, Soft Landing
          //   ease: [0.11, 0.97, 0.64, 0.945], // Minimal Start, Energetic Acceleration, Smooth Closure
        },
      },
    },
  },
  shiftInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "100%", // Starting from below but not too far to ensure a dramatic but manageable shift.
        transition: {
          ease: [0.75, 0, 0.25, 1], // Starting quickly
          duration: 0.6, // Shortened duration for a more dramatic start
        },
      },
      visible: {
        y: 0,
        transition: {
          duration: 0.8, // Slightly longer to accommodate the slow middle and swift end
          ease: [0.22, 1, 0.36, 1], // This easing function starts quickly (dramatic shift), slows down (slow middle), and ends quickly (clean swift end)
        },
      },
    },
  },

  whipInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.5, -0.15, 0.25, 1.05],
          duration: 0.75,
        },
      },
    },
  },
  rollIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.65,
          ease: [0.65, 0, 0.75, 1], // Great! Swift Beginning, Prolonged Ease, Quick Finish
          //   ease: [0.75, 0.05, 0.85, 1], // Quick Start, Smooth Middle, Sharp End
          //   ease: [0.7, -0.25, 0.9, 1.25], // Fast Acceleration, Gentle Slowdown, Sudden Snap
          //   ease: [0.7, -0.5, 0.85, 1.5], // Quick Leap, Soft Glide, Snappy Closure
        },
      },
    },
  },
  whipIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.35em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.45,
          //   ease: [0.75, 0.05, 0.85, 1], // Quick Start, Smooth Middle, Sharp End
          //   ease: [0.7, -0.25, 0.9, 1.25], // Fast Acceleration, Gentle Slowdown, Sudden Snap
          //   ease: [0.65, 0, 0.75, 1], // Great! Swift Beginning, Prolonged Ease, Quick Finish
          ease: [0.85, 0.1, 0.9, 1.2], // Rapid Initiation, Subtle Slow, Sharp Conclusion
        },
      },
    },
  },
};

/**
 * #### TextAnimate
 * TextAnimate component is a visual effect that creates a dynamic and interactive text animation.
 * It uses motion animations to create a mesmerizing interaction with the user.
 * @param text - The text to be animated.
 * @param type - The type of animation to be applied. Defaults to "whipInUp".
 * @param className - Additional classes to be applied to the component.
 * @returns JSX.Element - The rendered TextAnimate component.
 *
 * @remarks
 * This Component is "inspired" and customized from the Base of {@link https://ui.aceternity.com/}
 * @beta
 */
const TextAnimate: FC<TextAnimateProps> = ({
  text,
  type = "whipInUp",
  className,
  ...props
}: TextAnimateProps) => {
  //   const { ref, inView } = useInView({
  //     threshold: 0.5,
  //     triggerOnce: true,
  //   });

  const ref = useRef(null);

  const letters = Array.from(text);
  const { container, child } = animationVariants[type];

  const ctrls = useAnimation();

  //   useEffect(() => {
  //     if (isInView) {
  //       ctrls.start("visible");
  //     }
  //     if (!isInView) {
  //       ctrls.start("hidden");
  //     }
  //   }, [ctrls, isInView]);

  if (type === "rollIn" || type === "whipIn") {
    return (
      <h2 className={cn([cldText, className])}>
        {text.split(" ").map((word, windex) => {
          return (
            <motion.span
              animate={ctrls}
              aria-hidden="true"
              className="inline-block mr-[0.25em] whitespace-nowrap"
              initial="hidden"
              // eslint-disable-next-line react/no-array-index-key
              key={windex}
              ref={ref}
              transition={{
                delayChildren: windex * 0.13,
                staggerChildren: 0.025,
              }}
              variants={container}
            >
              {word.split("").map((character, index2) => {
                return (
                  <motion.span
                    aria-hidden="true"
                    className="inline-block -mr-[0.01em]"
                    // eslint-disable-next-line react/no-array-index-key
                    key={index2}
                    variants={child}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h2>
    );
  }

  return (
    <motion.h2
      animate={ctrls}
      className={cn([cldText, className])}
      initial="hidden"
      ref={ref}
      role="heading"
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      {...props}
    >
      {letters.map((letter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export { TextAnimate };
