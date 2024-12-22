import "./CalculatorStyle.css";
import InputScreen from "../inputPart/inputPart.component";
import CalculatorButtons from "../calculatorButtons/calculatorButtons.component.tsx";
import { useState } from "react";
interface Calculator {
  num1: number;
  num2: number;
  enterdOperation: string;
  Finalresult: string;
}
const CalculatorBody = (): JSX.Element => {
  const [numbers, setNumbers] = useState<Calculator>({
    num1: 0,
    num2: 0,
    enterdOperation: "",
    Finalresult: "0",
  });
  const [IsOperationEntered, SetIsOperationEntered] = useState<boolean>(false);
  function takeInput(num: number) {
    let newNum: number;
    if (IsOperationEntered) {
      newNum = numbers.num2 * 10 + num;
      setNumbers({ ...numbers, num2: newNum });
    } else {
      newNum = numbers.num1 * 10 + num;
      setNumbers({ ...numbers, num1: newNum });
    }
  }
  function handleOperation(operation: string) {
    if (numbers.num1 !== 0) {
      if (!IsOperationEntered) {
        SetIsOperationEntered(true);
      }
      setNumbers({ ...numbers, enterdOperation: operation });
    }
  }
  function calculateResult() {
    let result: number;
    if (
      !(numbers.num1 == 0 && numbers.num2 == 0 && numbers.enterdOperation == "")
    ) {
      switch (numbers.enterdOperation) {
        case "+":
          result = numbers.num1 + numbers.num2;
          break;
        case "-":
          result = numbers.num1 - numbers.num2;
          break;
        default:
          result = 0;
      }
      setNumbers({ ...numbers, Finalresult: result.toString() });
    }
  }
  function clearAll() {
    setNumbers({ num1: 0, num2: 0, enterdOperation: "", Finalresult: "0" });
    SetIsOperationEntered(false);
  }
  return (
    <div className="calculator">
      <InputScreen
        num1={numbers.num1}
        num2={numbers.num2}
        operation={numbers.enterdOperation}
        result={numbers.Finalresult}
      />
      <CalculatorButtons
        onAddNum={takeInput}
        onAddOperation={handleOperation}
        onEqual={calculateResult}
        onClear={clearAll}
      />
    </div>
  );
};

export default CalculatorBody;
