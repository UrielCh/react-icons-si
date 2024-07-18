import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Codesandbox icon from Simple Icons
 * @module
 */
export function SiCodesandbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z"}}]})(props);
}
export default SiCodesandbox;
