import React, { useEffect, useRef } from "react";

export interface FocusTrapProps {
  children: React.ReactElement | React.ReactElement[];
}

const focusTrapId = "trapFocus";
const FocusTrap: React.FC<FocusTrapProps> = ({ children }) => {
  const focusableElements = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const outSideElements = document.querySelectorAll(
      `body > *:not(#${focusTrapId}) > *`
    );

    Array.from(outSideElements).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.setAttribute("aria-hidden", "true");
      }
    });

    const focusTrappedContainer = document.querySelectorAll(`#${focusTrapId}`);

    if (focusTrappedContainer.length > 1) {
      throw new Error("Only one trap focus class is allowed to exist.");
    }

    const focusTrapElements = focusTrappedContainer[0];
    if (focusTrapElements instanceof HTMLElement) {
      focusableElements.current = focusTrapElements.querySelectorAll(
        `a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex^="-"])`
      );
    }
  }, [children]);

  useEffect(() => {
    const focusTrapModal = (e: KeyboardEvent): void => {
      if ((e.key === "Tab" || e.keyCode === 9) && focusableElements.current) {
        const firstFocusableElement = focusableElements.current[0];
        const lastFocusableElement =
          focusableElements.current[focusableElements.current.length - 1];

        if (!e.shiftKey && document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }

        if (e.shiftKey && document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }

        if (
          document.activeElement instanceof HTMLElement &&
          !Array.from(focusableElements.current).includes(
            document.activeElement
          )
        ) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", focusTrapModal);

    return (): void => {
      window.removeEventListener("keydown", focusTrapModal);

      const outSideElements = document.querySelectorAll(
        `body > *:not(#${focusTrapId}) > *`
      );

      Array.from(outSideElements).forEach((el) => {
        if (el instanceof HTMLElement) {
          el.removeAttribute("aria-hidden");
        }
      });
    };
  }, []);

  return <div id={focusTrapId}>{children}</div>;
};

export default FocusTrap;
