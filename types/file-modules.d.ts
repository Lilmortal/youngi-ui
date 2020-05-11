declare module "*.png";
declare module "*.jpg";

declare module "*.svg" {
  const content: string;
  export default content;
}

interface Styleable {
  classNames?: string;
  style?: React.CSSProperties;
}
