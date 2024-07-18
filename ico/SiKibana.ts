import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kibana icon from Simple Icons
 * @module
 */
export function SiKibana(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z"}}]})(props);
}
export default SiKibana;
