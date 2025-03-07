import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Nomad icon from Simple Icons
 * @module
 */
export function SiNomad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.004 0-10.4 6v12l10.392 6 10.4-6V6L12.004 0zm4.639 13.204-2.77 1.6-3.347-1.832v3.826l-3.144 1.995V10.8L9.88 9.272l3.462 1.823V7.191l3.301-1.984v7.997z"}}]})(props);
}
export default SiNomad;
