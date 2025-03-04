import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Techcrunch icon from Simple Icons
 * @module
 */
export function SiTechcrunch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z"}}]})(props);
}
export default SiTechcrunch;
