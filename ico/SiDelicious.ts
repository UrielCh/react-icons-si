import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Delicious icon from Simple Icons
 * @module
 */
export function SiDelicious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 12H0v12h12V12zM24 0H12v12h12V0z"}}]})(props);
}
export default SiDelicious;
