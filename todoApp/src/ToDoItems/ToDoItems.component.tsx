import "./ToDoItems.style.css";
import Item from "../item/Item.component.tsx";
import { Itodo } from "../assets/ItodoData.ts";
interface IToDoItemsProps {
  items: Array<Itodo>;
  onComplete: (id: number) => void;
  onDelete:(id:number)=>void;
}
export default function ToDoItems(props: IToDoItemsProps) {
  const todoItems: Array<Itodo> = props.items;
  return (
    <div className="ToDoItems">
      {todoItems.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          key={item.id}
          isUrgent={item.isUrgent}
          isDone={item.isDone}
          onComplete={props.onComplete}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}
