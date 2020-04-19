import React from "react";
import ReactDOM from "react-dom";

import Svg from "./test.svg";
import SvgFile from "./test.inline.svg";
import download from "./download.jpg";

import "./index.scss";

const App: React.FC<{}> = () => (
  <div className="test test__lala">
    test
    <img src={download} />
    <SvgFile />
    <img src={Svg} />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
