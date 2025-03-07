import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Testcafe icon from Simple Icons
 * @module
 */
export function SiTestcafe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m20.315 4.319-8.69 8.719-3.31-3.322-2.069 2.076 5.379 5.398 10.76-10.796zM5.849 14.689 0 19.682h24l-5.864-4.991h-3.2l-1.024.896h3.584l3.072 2.815H3.417l3.072-2.815h2.688l-.896-.896z"}}]})(props);
}
export default SiTestcafe;
