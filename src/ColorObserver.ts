import { Color } from "./Color";

/**
 * Detects character color used in an element.
 *
 * Make sure to use this class under an `useEffect` hook (using `[]` (empty) dependencies)
 * and on cleanup, invoke `ColorObserver#cleanup()`.
 */
export class ColorObserver {
  private _trigger_callback: Function;
  private m_animation_frame: number = -1;
  private m_animation_frame_fn: Function;

  constructor(element: HTMLElement | null, callback: (color: Color) => void) {
    const browser = typeof window == "object";

    this._trigger_callback = () => {
      if (!element) return;
      let color = window.getComputedStyle(element).getPropertyValue("color");
      color = color ? color : "#fff";
      callback(Color(color));
    };

    this.m_animation_frame_fn = () => {
      this._trigger_callback();
      this.m_animation_frame = requestAnimationFrame(
        this.m_animation_frame_fn as any,
      );
    };

    if (browser && element)
      this.m_animation_frame = requestAnimationFrame(
        this.m_animation_frame_fn as any,
      );

    this._trigger_callback();
  }

  cleanup() {
    if (this.m_animation_frame !== -1)
      window.cancelAnimationFrame(this.m_animation_frame);
  }
}
