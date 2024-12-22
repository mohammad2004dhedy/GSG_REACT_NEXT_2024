import "./inputPart.css";
import Result from "../Result/Result.component";
interface Iprops {
  num1: number;
  num2: number;
  operation: string;
  result: string;
}
export default function InputPart(props: Iprops): JSX.Element {
  return (
    <div className="InputPart">
      <div className="num1"><h2>{props.num1 == 0 ? "" : props.num1}</h2></div>
      <div className="operation"><h2>{props.operation}</h2></div>
      <div className="num2"><h2>{props.num2 == 0 ? "" : props.num2}</h2></div>
      <div className="equal"><h2>{props.result =="0" ? "" :"="}</h2></div>
      <Result finalResult={props.result} />
    </div>
  );
}
