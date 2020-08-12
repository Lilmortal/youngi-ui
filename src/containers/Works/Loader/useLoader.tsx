import { useState, useEffect } from "react";
import {
  setHasSeenLoaderStorage,
  getHasSeenHeaderStorage,
} from "../../../config/storage/loader";

const useLoader = (): [boolean, (e: React.AnimationEvent) => void] => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (getHasSeenHeaderStorage() !== "true") {
      setAnimating(true);
    }
  }, []);

  const onAnimationEnd = (e: React.AnimationEvent): void => {
    if (e.animationName?.startsWith("Loader_animation-zoom-out")) {
      setAnimating(false);
      setHasSeenLoaderStorage("true");
    }
  };

  return [animating, onAnimationEnd];
};

export default useLoader;
