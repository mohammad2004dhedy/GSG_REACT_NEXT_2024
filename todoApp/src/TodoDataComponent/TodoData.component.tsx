import "./DataComponent.style.css";
interface Iprops{
  tasksNumber: number;
  doneTasks: number;
  urgentTasks: number;
}
export default function TodoData(props:Iprops) {
  return (
    <div className="data-component">
      <div className="Data">
        <h3>{props.tasksNumber}</h3>
        <p>Created Tasks</p>
      </div>
      <div className="Data">
        <h3>{props.doneTasks}</h3>
        <p>Completed Tasks</p>
      </div>
      <div className="Data">
        <h3>{props.urgentTasks}</h3>
        <p>Urgent Tasks</p>
      </div>
    </div>
  );
}
