import React from "react";

import Svg from "./test.svg";
import SvgFile from "./test.inline.svg";
import download from "./download.jpg";

import "./index.scss";

const App: React.FC<{}> = () => (
  <div className="test test__lala">
    lala
    <img src={download} />
    <SvgFile />
    <img src={Svg} />
  </div>
);

const AnotherApp: React.FunctionComponent<> = () => <div>yeah</div>;

export { AnotherApp };
export default App;
