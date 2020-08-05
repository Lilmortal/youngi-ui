import React, { useRef, useEffect, useState } from "react";

export type Ratio = "1:1" | "3:2" | "4:3" | "16:9";

export interface AspectRatioProps {
  ratio: Ratio;
  children: React.ReactElement;
}

interface AspectRatioFitProps {
  ratio: Ratio;
  width: number;
}

interface CalculatedAspectRatio {
  width: number;
  height: number;
}

const roundToTwoDecimalPlaces = (num: number): number =>
  Math.round((num + Number.EPSILON) * 100) / 100;

const getRatioWidth = (width: number, ratio: Ratio): number => {
  let result = 0;
  switch (ratio) {
    case "3:2":
      result = (width * 3) / 2;
      break;
    case "4:3":
      result = (width * 4) / 3;
      break;
    case "16:9":
      result = (width * 16) / 9;
      break;
    default:
      result = width;
  }

  return roundToTwoDecimalPlaces(result);
};

export const calculateAspectRatioFit = ({
  width,
  ratio,
}: AspectRatioFitProps): CalculatedAspectRatio => {
  return {
    width: getRatioWidth(width, ratio),
    height: width,
  };
};

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children }) => {
  const [aspectRatioFit, setAspectRatioFit] = useState<
    CalculatedAspectRatio | undefined
  >(undefined);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef.current && componentRef.current.children) {
      // console.log(children.props, componentRef.current.children[0]);
      const child = componentRef.current.children[0];

      // console.log(child.)
      const width = child.clientWidth;

      setAspectRatioFit(
        calculateAspectRatioFit({
          width,
          ratio,
        })
      );
    } else {
      throw new Error("aspect ratio children does not exist.");
    }
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
