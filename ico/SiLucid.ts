import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lucid icon from Simple Icons
 * @module
 */
export function SiLucid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0 3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z"}}]})(props);
}
export default SiLucid;
