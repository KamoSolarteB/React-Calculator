import React, { useState, createContext } from "react";
import { DigitBtn } from "../components";

export const Context = createContext();

export function ContextProvider(props) {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 7; i <= 9; i++) {
      digits.push(<DigitBtn key={i} dig={i} />);
    }
    for (let i = 4; i <= 6; i++) {
      digits.push(<DigitBtn key={i} dig={i} />);
    }
    for (let i = 1; i <= 3; i++) {
      digits.push(<DigitBtn key={i} dig={i} />);
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc == "") {
      return
    }

    const value = calc.slice(0, -1)
    setCalc(value)
  }

  return (
    <Context.Provider
      value={{
        createDigits,
        updateCalc,
        calculate,
        deleteLast,
        calc,
        result,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
