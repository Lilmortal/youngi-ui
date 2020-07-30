import React, { useRef, useEffect, useState } from "react";

export interface AspectRatioProps {
  parentRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactElement;
}

interface AspectRatioFitProps {
  srcWidth: number;
  srcHeight: number;
  parentWidth: number;
}

interface CalculatedAspectRatio {
  width: number;
  height: number;
}

const calculateAspectRatioFit = ({
  srcWidth,
  srcHeight,
  parentWidth,
}: AspectRatioFitProps): CalculatedAspectRatio => {
  // const ratio = Math.min(parentWidth / srcWidth, parentHeight / srcHeight);
  const ratio = srcWidth / srcHeight;

  return {
    width: parentWidth,
    height: parentWidth * ratio,
  };
};

//TODO: As of now, don't need this... but might need it for images grid; if not, removed in next release.
const AspectRatio: React.FC<AspectRatioProps> = ({ parentRef, children }) => {
  const [aspectRatioFit, setAspectRatioFit] = useState<
    CalculatedAspectRatio | undefined
  >(undefined);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let parentWidth = 1,
      srcWidth = 1,
      srcHeight = 1;

    // TODO: Throw error if does not exist
    if (childrenRef.current) {
      const child = childrenRef.current.children[0];

      parentWidth = childrenRef.current.offsetWidth;
      srcWidth = child.clientWidth;
      srcHeight = child.clientHeight;
    }

    if (parentRef && parentRef.current) {
      parentWidth = parentRef.current.offsetWidth;
    }

    setAspectRatioFit(
      calculateAspectRatioFit({
        parentWidth,
        srcWidth,
        srcHeight,
      })
    );
  }, [parentRef, childrenRef]);

  // TODO: Throw error if multiple childrens
  return (
    <div ref={childrenRef}>
      {React.cloneElement(children, {
        style: { width: aspectRatioFit?.width, height: aspectRatioFit?.height },
      })}
    </div>
  );
};

export default AspectRatio;
