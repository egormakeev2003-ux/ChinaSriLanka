import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export function StatCounter({ value, label, suffix = "", prefix = "", delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            return value;
          }
          const increment = Math.ceil(value / 50);
          return Math.min(prev + increment, value);
        });
      }, 30);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xl text-gray-600 mt-2">{label}</div>
    </motion.div>
  );
}
