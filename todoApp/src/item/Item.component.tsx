import "./Item.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
interface ItemProps {
  id: number;
  title: string;
  isUrgent: boolean;
  isDone: boolean;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}
export default function Item(props: ItemProps) {
  const [isDone, setisDone] = useState<boolean>(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setisDone(e.target.checked);
    props.onComplete(props.id);
  }
  return (
    <div
      className={`Todo-item ${isDone ? "done" : ""} ${
        props.isUrgent ? "urgent" : ""
      }`}
    >
      <span className="isUrgent">U</span>
      <input
        placeholder="f"
        type="checkbox"
        onChange={(e) => handleChange(e)}
      />
      <span className="title">{props.title}</span>
      <div className="delete">
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => props.onDelete(props.id)}
        />
      </div>
    </div>
  );
}
