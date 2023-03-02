import React, { useContext } from "react";
import { Context } from "./context/Context";
import { DeleteBtn, DigitBtn, Equal, OperatorBtn } from "./components";

function App() {
  const { createDigits, calc, result } = useContext(Context);
  return (
    <div className="container">
      <div className="calculadora">
        <div className="screen">
          {result ? <span>({result})</span> : ""}
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
