import { createContext, useCallback, useContext, useEffect, useState } from "react";

// A minimal drop-in replacement for the handful of react-router-dom APIs
// this project needs (BrowserRouter, Routes/Route for three static paths,
// Link, useLocation). Kept dependency-free and framework-agnostic so the
// three sites — group landing, Kuwait, Oman — can live behind real routes
// (/, /kuwait, /oman) without pulling in a routing library.
const LocationContext = createContext(null);

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, "", to);
    }
    setPathname(to);
  }, []);

  return <LocationContext.Provider value={{ pathname, navigate }}>{children}</LocationContext.Provider>;
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used within a BrowserRouter");
  return { pathname: ctx.pathname };
}

export function useNavigate() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useNavigate must be used within a BrowserRouter");
  return ctx.navigate;
}

export function Link({ to, children, onClick, ...rest }) {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("Link must be used within a BrowserRouter");

  const handleClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick?.(e);
    ctx.navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

// Renders the element whose `path` matches the current pathname, falling
// back to a `path="*"` route if one is provided. Only exact, static paths
// are supported — enough for this project's three routes.
export function Routes({ children }) {
  const { pathname } = useLocation();
  const routes = Array.isArray(children) ? children : [children];
  const match =
    routes.find((r) => r.props.path === pathname) || routes.find((r) => r.props.path === "*");
  return match ? match.props.element : null;
}

// Data-only — Routes reads `path`/`element` off these without rendering them.
export function Route() {
  return null;
}
