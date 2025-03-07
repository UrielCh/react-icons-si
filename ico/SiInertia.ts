import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Inertia icon from Simple Icons
 * @module
 */
export function SiInertia(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.901 5.331H0L6.669 12 0 18.669h6.901L13.571 12 6.9 5.331zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12l-6.669-6.669z"}}]})(props);
}
export default SiInertia;
