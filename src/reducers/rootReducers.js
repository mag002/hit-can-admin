import challenge_rdc from "./challengeReducer";
import problem_rdc from "./problemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  challenge: challenge_rdc,
  problem: problem_rdc
});

export default rootReducer;
