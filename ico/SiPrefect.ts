import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Prefect icon from Simple Icons
 * @module
 */
export function SiPrefect(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8.003 4.288 4.002 12 0l7.713 4v8.004L12 16v8l-7.71-4v-8L12 16V8.003Z"}}]})(props);
}
export default SiPrefect;
