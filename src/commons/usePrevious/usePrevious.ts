import { useEffect, useRef } from "react";

const usePrevious = <P>(value: P): P | undefined => {
  const ref = useRef<P>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
