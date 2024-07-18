import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Skaffold icon from Simple Icons
 * @module
 */
export function SiSkaffold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.602 20.097H24v3.836H6.602v-3.836zm-2.766-6.692h13.562v3.837H0V6.714h3.836v6.691zm13.562-9.502H0V.067h17.398v3.836zm2.766 6.692H6.602V6.758H24v10.528h-3.836v-6.691z"}}]})(props);
}
export default SiSkaffold;
