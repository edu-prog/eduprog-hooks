import React, { useEffect, useState } from "react";

export const useHover = (ref: React.RefObject<HTMLElement>) => {
  const [hovering, setHovering] = useState(false);

  const enableHover = () => setHovering(true);
  const disableHover = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener("mouseenter", enableHover);
    node.addEventListener("mousemove", enableHover);
		node.addEventListener("mouseleave", disableHover);

		return () => {
			node.removeEventListener("mouseenter", enableHover);
			node.removeEventListener("mousemove", enableHover);
			node.removeEventListener("mouseleave", disableHover);
		}
  }, []);

  return hovering;
};
