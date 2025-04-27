# @hydroperx/color

## Documentation

### Color

The `Color` class is similiar to [NPM color](https://www.npmjs.com/package/color), but supports calculating color difference (`color.delta(other)`) and does not need a separate typings package.

### Color observer

Utility for detecting the computed character color (the cascading `color` property) in an element. This is useful for icons that adapt to light and dark themes.

```ts
import { ColorObserver } from "@hydroperx/color";
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
