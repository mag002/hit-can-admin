import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as adminPageActions from "../../actions/adminPage";

function TestCmp(props) {
  return <div onClick={props.adminPageActions.toggleSidebar}>OK</div>;
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    // challengeActions: bindActionCreators(challengeActions, dispatch)
    adminPageActions: bindActionCreators(adminPageActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCmp);
