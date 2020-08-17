import React, { useEffect, createContext, useState } from "react";

export type BreakpointTypes = "sm" | "md" | "lg";

export interface Breakpoints {
  sm: boolean;
  md: boolean;
  lg: boolean;
}

interface BreakpointProviderProps {
  queries: Record<BreakpointTypes, string>;
  children: React.ReactNode;
}

const defaultBreakpoints: Breakpoints = {
  sm: false,
  md: false,
  lg: false,
};

export const BreakpointContext = createContext(defaultBreakpoints);

// TODO: test
const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  queries,
  children,
}) => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>(
    defaultBreakpoints
  );

  useEffect(() => {
    if (window?.matchMedia) {
      (Object.keys(queries) as Array<keyof typeof queries>).forEach(
        (breakpoint) => {
          const breakpointsListener = ({
            matches,
          }: MediaQueryListEvent): void => {
            setBreakpoints((prevBreakpoints) => ({
              ...prevBreakpoints,
              [breakpoint]: matches,
            }));
          };

          const media = window.matchMedia(queries[breakpoint]);

          setBreakpoints((prevBreakpoints) => ({
            ...prevBreakpoints,
            [breakpoint]: media.matches,
          }));

          if (media.addEventListener) {
            media.addEventListener("change", breakpointsListener);
          }

          // This is to support older browsers and most notably Safari.
          if (media.addListener) {
            media.addListener(breakpointsListener);
          }

          return (): void =>
            media.removeEventListener("change", breakpointsListener);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BreakpointContext.Provider value={breakpoints}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;
