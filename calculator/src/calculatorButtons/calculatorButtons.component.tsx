import "./calculatorButtons.css";
interface Iprop {
  onAddNum: (num: number) => void;
  onAddOperation: (operation: string) => void;
  onEqual: () => void;
  onClear:()=>void;
}
export default function CalculatorButtons(props: Iprop): JSX.Element {
  return (
    <>
      <div className="row">
        <button type="button" onClick={() => props.onAddNum(1)}>
          1
        </button>
        <button type="button" onClick={() => props.onAddNum(2)}>
          2
        </button>
        <button type="button" onClick={() => props.onAddNum(3)}>
          3
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => props.onAddNum(4)}>
          4
        </button>
        <button type="button" onClick={() => props.onAddNum(5)}>
          5
        </button>
        <button type="button" onClick={() => props.onAddNum(6)}>
          6
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => props.onAddNum(7)}>
          7
        </button>
        <button type="button" onClick={() => props.onAddNum(8)}>
          8
        </button>
        <button type="button" onClick={() => props.onAddNum(9)}>
          9
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => props.onAddNum(0)}>
          0
        </button>
        <button
          type="button"
          className="plus"
          onClick={() => props.onAddOperation("+")}
        >
          +
        </button>
        <button
          type="button"
          className="minus"
          onClick={() => props.onAddOperation("-")}
        >
          -
        </button>
      </div>
      <div className="row equal">
        <button type="button" onClick={props.onEqual}>
          =
        </button>
      </div>
      <div className="row clear">
        <button type="button" onClick={props.onClear}>
          Clear
        </button>
      </div>
    </>
  );
}
