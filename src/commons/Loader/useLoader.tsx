import { useState, useEffect } from "react";
import {
  setHasSeenLoaderStorage,
  getHasSeenHeaderStorage,
} from "../../config/storage/loader";

const useLoader = (): [boolean, () => void] => {
  const [isAnimating, setIsAnimated] = useState(false);

  useEffect(() => {
    if (getHasSeenHeaderStorage() !== "true") {
      setIsAnimated(true);
    }
  }, []);

  const onAnimationEnd = (): void => {
    setIsAnimated(false);
    setHasSeenLoaderStorage("true");
  };

  return [isAnimating, onAnimationEnd];
};

export default useLoader;
