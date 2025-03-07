import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lightning icon from Simple Icons
 * @module
 */
export function SiLightning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z"}}]})(props);
}
export default SiLightning;
