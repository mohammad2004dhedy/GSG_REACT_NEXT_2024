import Student from "../components/student/student.component";
import { IStudent } from "../types";

interface Istate {
  studentsList: IStudent[];
  totalAbsents: number;
}
type Action =
  | {
      type: "INIT_STATE";
      payload: { students: IStudent[]; totalabsents: number };
    }
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "REMOVE_STUDENT" }
  | { type: "HANDLE_ABSENTS"; payload: { id: string; change: number } };

const reducer = (state: Istate, action: Action): Istate => {
  switch (action.type) {
    case "INIT_STATE":
      {
        if (state.studentsList.length === 0) {
          return {
            studentsList: action.payload.students,
            totalAbsents: action.payload.totalabsents,
          };
        }
        return state;
      }
      break;
    case "ADD_STUDENT":
      {
        const newStd = action.payload;
        return { ...state, studentsList: [...state.studentsList, newStd] };
      }
      break;
    case "HANDLE_ABSENTS":
      {
        const { id, change } = action.payload;
        const updatedStudents = state.studentsList.map((std) =>
          std.id == id ? { ...std, absents: std.absents + change } : std
        );
        return {
          studentsList: updatedStudents,
          totalAbsents: state.totalAbsents + change,
        };
      }
      break;
    case "REMOVE_STUDENT": {
      const newStudents = state.studentsList.filter((_, index) => index !== 0);
      return { ...state, studentsList: newStudents };
    }
    default:
      return state;
  }
};
export default reducer;
