import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, [data-cursor-hover]",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, [data-cursor-hover]",
      );
      newElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, []);

  // Disable on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Core small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 1300, // faster
          damping: 25,
          mass: 0.15,
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      {/* Main ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300, // faster
          damping: 18,
          mass: 0.15,
        }}
      >
        <div
          className="w-10 h-10 rounded-full border-2 border-purple-500"
          style={{
            background: isHovering
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)"
              : "transparent",
          }}
        />
      </motion.div>

      {/* Glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 36,
          y: mousePosition.y - 36,
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? 0.45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.5,
        }}
      >
        <div
          className="w-[72px] h-[72px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Outer soft halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 70,
          y: mousePosition.y - 70,
          opacity: isVisible ? 0.25 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 26,
          mass: 1.0,
        }}
      >
        <div
          className="w-[140px] h-[140px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 60%)",
          }}
        />
      </motion.div>
    </>
  );
}
export function CursorProvider({ children }: { children: React.ReactNode });
