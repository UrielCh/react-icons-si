import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lighthouse icon from Simple Icons
 * @module
 */
export function SiLighthouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0l5.5 3.5v5H20v3h-2.25l2 12.5H4.25l2-12.5H4v-3h2.5V3.53zm2.94 13.25l-6.22 2.26L8 20.04l7.5-2.75zM12 3.56L9.5 5.17V8.5h5V5.15Z"}}]})(props);
}
export default SiLighthouse;
