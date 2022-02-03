import React from "react";
declare enum InputMethod {
    Keyboard = 0,
    Mouse = 1,
    Touch = 2
}
export declare function useFocus<T extends HTMLElement>(ref: React.MutableRefObject<T> | React.RefObject<T>, inputMethod?: InputMethod): [boolean];
export {};
