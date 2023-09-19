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
    if (window.matchMedia("(max-width: 959px)").matches) {
      return "S";
    } else {
      return "M";
    }
  }

  return breakpoint;
}

export default useBreakpoint;
