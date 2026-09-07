import { useEffect } from "react";
import { useLocation } from "../lib/router";

// Each route (Landing, Kuwait, Oman) is a full standalone page, so a
// route change should land at the top rather than keep the previous
// page's scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
