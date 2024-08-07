import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Uikit icon from Simple Icons
 * @module
 */
export function SiUikit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.697 3.292l-4.109 2.489 4.738 2.696v7.077l-6.365 3.538-6.258-3.538v-5.485L1.596 7.956V18l10.219 6 10.589-6V6.002l-4.707-2.71zm-1.904-.989L11.813 0 7.665 2.568l4.032 2.218 4.096-2.483z"}}]})(props);
}
export default SiUikit;
