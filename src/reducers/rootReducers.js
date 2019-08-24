import challenge_rdc from "./challengeReducer";
import problem_rdc from "./problemReducer";
import { combineReducers } from "redux";
import adminPage_rdc from "./adminPageReducer";

const rootReducer = combineReducers({
  challenge: challenge_rdc,
  problem: problem_rdc,
  adminPage: adminPage_rdc
});

export default rootReducer;
