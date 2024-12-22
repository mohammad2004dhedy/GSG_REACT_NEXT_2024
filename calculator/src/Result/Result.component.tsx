interface Iprops {
  finalResult: string;
}
export default function Result(props: Iprops): JSX.Element {
  return (
    <div>
      <h2>{props.finalResult=="0"?"":props.finalResult}</h2>
    </div>
  );
}
