import { useState, useEffect } from "react";
import {
  setHasSeenLoaderStorage,
  getHasSeenHeaderStorage,
} from "../../config/storage/loader";

const useLoader = (): [boolean, () => void] => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (getHasSeenHeaderStorage() !== "true") {
      setAnimating(true);
    }
  }, []);

  const onAnimationEnd = (): void => {
    setAnimating(false);
    setHasSeenLoaderStorage("true");
  };

  return [animating, onAnimationEnd];
};

export default useLoader;
