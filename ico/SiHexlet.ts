import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hexlet icon from Simple Icons
 * @module
 */
export function SiHexlet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.732 7.099v6.422H7.268V7.099L4.563 6.085V24h2.705v-7.775h9.464V24h2.705V6.085l-2.705 1.014Zm3.043-4.057L12 0 4.225 3.042 12 5.746l7.775-2.704Z"}}]})(props);
}
export default SiHexlet;
