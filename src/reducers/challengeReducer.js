import * as challengeListConstants from "../constants/challenge";
const initState = {};

const challenge_rdc = (state = initState, action) => {
  switch (action.type) {
    case challengeListConstants.FETCH_ACTION: {
      return {
        ...state,
        challenge: []
      };
    }
    case challengeListConstants.FETCH_ACTION_SUCCESS: {
      return {
        ...state,
        challenge: action.payload.data
      };
    }
    case challengeListConstants.FETCH_ACTION_FAIL: {
      return {
        ...state,
        challenge: []
      };
    }
    default:
      return state;
  }
};

export default challenge_rdc;
