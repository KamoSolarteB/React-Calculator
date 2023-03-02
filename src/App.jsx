import React, { useContext } from "react";
import { Context } from "./context/Context";
import { DeleteBtn, DigitBtn, Equal, OperatorBtn } from "./components";

function App() {
  const {
    createDigits,
    calc,
    result,
    app,
    calculator,
    screen,
    res,
  } = useContext(Context);

  return (
    <div className={app}>
      <div className={calculator}>
        <div className={screen}>
          {result ? <span className={res}>({result})</span> : ""}
          &nbsp;
          {calc || "0"}
        </div>

        <div className="operator digits">
          <OperatorBtn operator="/" />
          <OperatorBtn operator="*" />
          <OperatorBtn operator="+" />
          <OperatorBtn operator="-" />

          <DeleteBtn type="DEL" />
        </div>

        <div className="digits">
          {createDigits()}
          <DigitBtn dig="0" />
          <DigitBtn dig="." />

          <Equal type="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
