import { useEffect, useRef, useReducer } from "react";
import AddForm from "../components/add-form/add-form.component";
import Student from "../components/student/student.component";
import useLocalStorage from "../hooks/local-storage.hook";
import { IStudent } from "../types";
import reducer from "./reducer.ts";
const Main = () => {
  const lastStdRef = useRef<HTMLDivElement>(null);
  const [{ studentsList, totalAbsents }, dispatch] = useReducer(reducer, {
    studentsList: [],
    totalAbsents: 0,
  });
  const { storedData } = useLocalStorage(studentsList, "students-list");
  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => {
      return prev + cur.absents;
    }, 0);
    dispatch({
      type: "INIT_STATE",
      payload: { students: stdList, totalabsents: totalAbs },
    });
  }, [storedData]);

  const removeFirst = () => {
    dispatch({ type: "REMOVE_STUDENT" });
  };
  const handleAbsentChange = (id: string, change: number) => {
    dispatch({ type: "HANDLE_ABSENTS", payload: { id, change } });
  };

  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: "ADD_STUDENT", payload: newStudent });
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {totalAbsents}
        </b>
      </div>
      {studentsList.map((student: IStudent) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;
