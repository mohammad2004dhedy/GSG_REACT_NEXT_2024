import "./FormComponent.style.css";
import { Itodo } from "../assets/ItodoData";
import { useState } from "react";
interface Iprops {
  onAddTask: (newTask: Itodo) => void;
}
export default function FormComponent(props: Iprops): JSX.Element {
  const [formInputs, setformInputs] = useState<Itodo>({
    isDone: false,
    isUrgent: false,
    title: "",
  });
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: Itodo = { ...formInputs };
    props.onAddTask(newTask);
    setformInputs({ isDone: false, isUrgent: false, title: "" });
  }
  function handleChange(key: string, value: string | boolean) {
    setformInputs({ ...formInputs, [key]: value });
  }
  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={formInputs.title}
        required
        type="text"
        placeholder="Type Todo here"
        onChange={(e) => {
          handleChange("title", e.target.value);
        }}
      />
      <div className="isUrgent">
        <input
          checked={formInputs.isUrgent}
          id="Urgent"
          type="checkbox"
          onChange={(e) => {
            handleChange("isUrgent", e.target.checked);
          }}
        />
        <label htmlFor="Urgent">Is It Urgent ? </label>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
