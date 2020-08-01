import React, { useRef, useEffect, useState } from "react";

export type Ratio = "3:2" | "4:3" | "16:9";

export interface AspectRatioProps {
  ratio: Ratio;
  children: React.ReactElement;
}

interface AspectRatioFitProps {
  ratio: Ratio;
  srcWidth: number;
}

interface CalculatedAspectRatio {
  width: number;
  height: number;
}

const getRatioFormula = (width: number, ratio: Ratio): number => {
  switch (ratio) {
    case "3:2":
      return (width * 3) / 2;
    case "4:3":
      return (width * 4) / 3;
    case "16:9":
      return (width * 16) / 9;
    default:
      return width;
  }
};

const calculateAspectRatioFit = ({
  srcWidth,
  ratio,
}: AspectRatioFitProps): CalculatedAspectRatio => {
  return {
    width: getRatioFormula(srcWidth, ratio),
    height: srcWidth,
  };
};

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children }) => {
  const [aspectRatioFit, setAspectRatioFit] = useState<
    CalculatedAspectRatio | undefined
  >(undefined);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let srcWidth = 1;

    if (componentRef.current && componentRef.current.children) {
      const child = componentRef.current.children[0];

      srcWidth = child.clientWidth;
    } else {
      throw new Error("aspect ratio children does not exist.");
    }

    setAspectRatioFit(
      calculateAspectRatioFit({
        srcWidth,
        ratio,
      })
    );
  }, [ratio, componentRef]);

  return (
    <div ref={componentRef}>
      {React.cloneElement(children, {
        style: { width: aspectRatioFit?.width, height: aspectRatioFit?.height },
      })}
    </div>
  );
};

export default AspectRatio;
