import * as adminPageContants from "../constants/adminPage";
const initState = {
  open: false
};

const adminPage_rdc = (state = initState, action) => {
  switch (action.type) {
    case adminPageContants.TOGGLE_SIDEBAR:
      return {
        ...state,
        open: !state.open
      };
    default:
      return { ...state };
  }
};

export default adminPage_rdc;
