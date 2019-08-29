import React from "react";
import { ChallengeCRUD } from "../../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as challengeActions from "../../actions/challenge";
const mapStateToProps = state => {
  return {
    data: state.challenge
  };
};
const mapDispatchToProps = dispatch => {
  return {
    challengeActions: bindActionCreators(challengeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeCRUD);
