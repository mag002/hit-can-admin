import {
  CourseCRUD,
  AccountCRUD,
  ProblemCRUD,
  ResultCRUD,
  StudentCRUD
} from "../components";
import ChallengeCRUD from "../containers/ChallengeCRUD";
export const ROUTER_TEACHER = [
  {
    path: "/chall",
    label: "Challenge",
    component: ChallengeCRUD
  },
  {
    path: "/prob",
    label: "Problem",
    component: ProblemCRUD
  },

  {
    path: "/stu",
    label: "Student",
    component: StudentCRUD
  },
  {
    path: "/res",
    label: "Result",
    component: ResultCRUD
  }
];
export const ROUTER_ADMIN = [
  {
    path: "/cou",
    label: "Courses",
    component: CourseCRUD
  },
  {
    path: "/acc",
    label: "Account",
    component: AccountCRUD
  }
];
