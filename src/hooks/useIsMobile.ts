import { useContext } from "react";
import { useWindowSize } from "./useWindowSize";
import { IsSsrMobileContext } from "./../contexts/IsMobileContext"

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 768;

  return isSsrMobile || isBrowserMobile;
};