import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bulma icon from Simple Icons
 * @module
 */
export function SiBulma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z"}}]})(props);
}
export default SiBulma;
