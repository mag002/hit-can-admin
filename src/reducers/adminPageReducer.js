import * as adminPageContants from "../constants/adminPage";
import { ADMIN_PAGE_TYPE } from "../constants/index";
const initState = {
  open: true,
  type: ADMIN_PAGE_TYPE.CHALL
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
