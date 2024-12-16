"use client";

import { useEffect } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useSpring, useTransform } from "framer-motion";
import { Text as cldText } from ">util/classnames";

/**
 * #### AnimatedNumberProps
 * Interface for defining properties of the AnimatedNumber component.
 * @param value - The number to be animated.
 * @param mass - The mass of the spring, affecting the animation's speed and bounce. Defaults to 0.8.
 * @param stiffness - The stiffness of the spring, affecting the animation's speed and bounce. Defaults to 75.
 * @param damping - The damping of the spring, affecting the animation's bounce. Defaults to 15.
 * @param precision - The number of decimal places to round the value to. Defaults to 0.
 * @param format - A function to format the value. Defaults to a function that returns the value formatted with commas.
 * @param onAnimationStart - A callback function to be called when the animation starts.
 * @param onAnimationComplete - A callback function to be called when the animation completes.
 */
interface AnimatedNumberProps {
  value: number;
  mass?: number;
  stiffness?: number;
  damping?: number;
  precision?: number;

  format?: (value: number) => string;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

/**
 * #### Custom
 * Custom component for animating a number with a spring effect.
 * It allows for customization of the animation's properties and formatting of the number.
 * @param props - The properties of the component.
 * @returns JSX.Element - The rendered Custom component.
 *
 * @remarks
 * This component is designed to be used for animating numbers with a spring effect.
 * It can be customized by passing in different properties for the animation and formatting.
 */

export function Custom({
  value,
  mass = 0.8,
  stiffness = 75,
  damping = 15,
  precision = 0,
  format = (num) => num.toLocaleString(),
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps): React.JSX.Element {
  const spring = useSpring(value, { mass, stiffness, damping });
  const display: MotionValue<string> = useTransform(spring, (current: number) =>
    format(parseFloat(current.toFixed(precision)))
  );

  useEffect(() => {
    spring.set(value);
    if (onAnimationStart) onAnimationStart();
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- idk it works
    const unsubscribe = spring.onChange(() => {
      if (spring.get() === value && onAnimationComplete) onAnimationComplete();
    });
    return () => {
      unsubscribe();
    };
  }, [spring, value, onAnimationStart, onAnimationComplete]);

  return (
    <motion.span className={cldText} data-testid="animated-number">
      {display}
    </motion.span>
  );
}

/**
 * #### SpringNumbers
 * Component for animating a number with a spring effect using default properties.
 * It simplifies the usage of the Custom component by providing default animation properties.
 * @param props - The properties of the component.
 * @returns JSX.Element - The rendered SpringNumbers component.
 *
 * @remarks
 * This component is designed to be used for animating numbers with a spring effect using default properties.
 * It simplifies the usage of the Custom component by providing default animation properties.
 */

export function SpringNumbers({
  value,
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps): React.JSX.Element {
  return (
    <Custom
      damping={15}
      mass={1.3}
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      stiffness={50}
      value={value}
    />
  );
}
