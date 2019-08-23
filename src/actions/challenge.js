import * as challengeApis from "./../apis/challenge";
import * as challengeContants from "../constants/challenge";

export const fetchChallengeList = () => {
  return { type: challengeContants.FETCH_ACTION };
};

export const fetchChallengeListSuccess = data => {
  return {
    type: challengeContants.FETCH_ACTION_SUCCESS,
    payload: {
      data: data
    }
  };
};
export const fetchChallengeListFail = error => {
  return {
    type: challengeContants.FETCH_ACTION_FAIL,
    payload: { error: error }
  };
};

export const fetchChallengeListRequest = () => {
  return dispatch => {
    dispatch(fetchChallengeList());
    challengeApis
      .getListChallenge()
      .then(res => {
        const data = res.data.data;
        console.log(typeof data);

        dispatch(fetchChallengeListSuccess(data));
      })
      .catch(error => {
        dispatch(fetchChallengeListFail(error));
      });
  };
};
