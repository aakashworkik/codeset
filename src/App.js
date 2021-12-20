import "./styles.scss";
import "./icons.scss";
import React from "react";
import RangeRenderer from "./component/range";
import props from "./props";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Deniel</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* START Add your component here */}
      <RangeRenderer {...props} />
      {/* END Add your component here */}
    </div>
  );
}
