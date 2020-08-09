import React, { useRef, useEffect, useState } from "react";

export type Ratio = "1:1" | "3:2" | "4:3" | "16:9";

export interface AspectRatioProps {
  ratio: Ratio;
  children: React.ReactElement;
}

interface AspectRatioFitProps {
  ratio: Ratio;
  width: number;
  height: number;
}

interface CalculatedAspectRatio {
  width: number;
  height: number;
}

const roundToTwoDecimalPlaces = (num: number): number =>
  Math.round((num + Number.EPSILON) * 100) / 100;

const getCalcRatioLength = (length: number, ratio: Ratio): number => {
  let result = 0;
  switch (ratio) {
    case "3:2":
      result = (length * 3) / 2;
      break;
    case "4:3":
      result = (length * 4) / 3;
      break;
    case "16:9":
      result = (length * 16) / 9;
      break;
    default:
      result = length;
  }

  return roundToTwoDecimalPlaces(result);
};

export const calculateAspectRatioFit = ({
  width,
  height,
  ratio,
}: AspectRatioFitProps): CalculatedAspectRatio => {
  if (width >= height) {
    return {
      width: getCalcRatioLength(width, ratio),
      height,
    };
  }

  return {
    width,
    height: getCalcRatioLength(height, ratio),
  };
};

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children }) => {
  const [aspectRatioFit, setAspectRatioFit] = useState<
    CalculatedAspectRatio | undefined
  >(undefined);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef.current && componentRef.current.children) {
      const child = componentRef.current.children[0];

      const width =
        (children.props.style && children.props.style.width) ||
        child.clientWidth;
      const height =
        (children.props.style && children.props.style.height) ||
        child.clientHeight;

      setAspectRatioFit(
        calculateAspectRatioFit({
          width,
          height,
          ratio,
        })
      );
    } else {
      throw new Error("aspect ratio children does not exist.");
    }
  }, [ratio, componentRef, children.props.style]);

  return (
    <div ref={componentRef}>
      {React.cloneElement(children, {
        style: {
          ...children.props.style,
          width: aspectRatioFit?.width,
          height: aspectRatioFit?.height,
        },
      })}
    </div>
  );
};

export default AspectRatio;
