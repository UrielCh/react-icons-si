import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stencil icon from Simple Icons
 * @module
 */
export function SiStencil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.85 15.66h9.25l-5 5.34H3.9ZM24 9.328H4.997L0 14.672h19.003ZM10.884 3H20.1l-4.977 5.34H5.9Z"}}]})(props);
}
export default SiStencil;
