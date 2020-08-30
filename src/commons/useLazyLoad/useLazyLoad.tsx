import { useEffect } from "react";

const useLazyLoad = (
  observedRef: React.RefObject<HTMLDivElement>,
  placeholder = "data-src"
): void => {
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
            const dataSrc = entry.target.getAttribute(placeholder);
            (entry.target as HTMLElement).style.backgroundImage = `url(${dataSrc})`;

            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach((lazyBackground) => {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  }, [observedRef, placeholder]);
};

export default useLazyLoad;
