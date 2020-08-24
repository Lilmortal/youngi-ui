import { useEffect } from "react";

// Placeholder to store the src
const DATA_SRC = "data-src";

const useLazyLoad = (observedRef: React.RefObject<HTMLDivElement>): void => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      `.${observedRef.current?.className.split(" ")[0]}`
    );

    if (!elements) {
      throw new Error("failed to find any observable elements.");
    }

    const lazyBackgrounds = Array.from(elements);

    if ("IntersectionObserver" in window) {
      const lazyBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataSrc = entry.target.getAttribute(DATA_SRC);
            (entry.target as HTMLElement).style.backgroundImage = `url(${dataSrc})`;

            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach((lazyBackground) => {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  }, [observedRef]);
};

export default useLazyLoad;
