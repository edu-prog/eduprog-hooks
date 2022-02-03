import React from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: React.MouseEvent | React.TouchEvent) => void
) => {
	React.useEffect(() => {
		const handler = (event: any) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			callback(event);
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		}
	}, [ref, callback])
};
