# ColorObserver

Simple TypeScript + React utility that detects the computed character color (the CSS `color` property) in an element, checking for mouse and focus events across all parents.

This is useful for icons that adapt to light and dark themes.

## Example

```ts
import { ColorObserver } from "com.hydroper.colorobserver";
import { useEffect, useRef } from "react";
import Color from "color";

const myRef = useRef(null);

useEffect(() => {
    const colorObserver = new ColorObserver(myRef.current, (color: Color) => {
        console.log("light =", color.isLight());
    });

    return () => {
        colorObserver.cleanup();
    };
}, []);
```
