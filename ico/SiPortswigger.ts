import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Portswigger icon from Simple Icons
 * @module
 */
export function SiPortswigger(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0v24h10.718v-3.805l3.496-4.272h-3.496v-5.205H4.427l6.291-7.767V0Zm13.282 0v3.884L9.786 8.155h3.496v5.205h6.291l-6.291 7.767V24H24V0Z"}}]})(props);
}
export default SiPortswigger;
