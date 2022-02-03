import React from "react";

enum InputMethod {
  Keyboard,
  Mouse,
  Touch,
}

let previousInputMethod: InputMethod;

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key == "Tab") {
    previousInputMethod = InputMethod.Keyboard;
  }
};

const handleMouseDown = () => {
  previousInputMethod = InputMethod.Mouse;
};

const handleTouchStart = () => {
  previousInputMethod = InputMethod.Touch;
};

const submitGlobalListeners = () => {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("touchstart", handleTouchStart);
};

export function useFocus<T extends HTMLElement>(
  ref: React.MutableRefObject<T> | React.RefObject<T>,
  inputMethod?: InputMethod
): [boolean] {
	const [focus, setFocus] = React.useState(false);

	const handleFocus = React.useCallback(() => {
		if (!inputMethod || inputMethod == previousInputMethod) {
			setFocus(true);
		}
	}, [inputMethod]);

	const handleBlur = React.useCallback(() => {
		setFocus(false);
	}, [])

	React.useEffect(() => {
		const node = ref.current;

		if (node) {
			node.addEventListener("focusin", handleFocus);
			node.addEventListener("focusout", handleBlur);
		}

		return () => {
			if (node) {
				node.removeEventListener("focusin", handleFocus);
				node.removeEventListener("focusout", handleBlur);
			}
		};
	}, [handleFocus, handleBlur, ref]);

	React.useEffect(submitGlobalListeners, []);

	return [focus];
}
