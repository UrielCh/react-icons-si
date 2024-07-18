import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bandcamp icon from Simple Icons
 * @module
 */
export function SiBandcamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 18.75l7.437-13.5H24l-7.438 13.5H0z"}}]})(props);
}
export default SiBandcamp;
