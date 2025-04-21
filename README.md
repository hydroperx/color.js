# @hydroperx/colorobserver

Simple TypeScript utility that detects the computed character color (the CSS `color` property) in an element, checking for mouse and focus events across all parents.

This is useful for icons that adapt to light and dark themes.

## Example

```ts
import { ColorObserver } from "@hydroperx/colorobserver";
import { useEffect, useRef } from "react";

const ref = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    // color observer
    const color_observer = new ColorObserver(ref.current, color => {
        console.log("light =", color.isLight());
    });

    // cleanup function
    return () => {
        color_observer.cleanup();
    };
}, []);
```
