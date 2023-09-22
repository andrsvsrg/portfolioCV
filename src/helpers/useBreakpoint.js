import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getBreakpoint() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      return "phone";
    } else if (
      window.matchMedia("(min-width: 769px) and (max-width: 959px)").matches
    ) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  return breakpoint;
}

export default useBreakpoint;
