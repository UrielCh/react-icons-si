import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Embark icon from Simple Icons
 * @module
 */
export function SiEmbark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.658 16.662v-6.644C9.197 10.017 13.687 5.533 13.69 0h6.653c-.003 9.202-7.472 16.662-16.685 16.662ZM3.656 24v-6.672h16.689V24H3.657"}}]})(props);
}
export default SiEmbark;
