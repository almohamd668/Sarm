

import { useState, useEffect } from "react";

export function useScreenWidth() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return screenWidth;
}



