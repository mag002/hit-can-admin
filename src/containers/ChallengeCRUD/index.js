import { ChallengeCRUD } from "../../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as challengeActions from "../../actions/challenge";
import * as adminPageActions from "../../actions/adminPage";
const mapStateToProps = state => {
  return {
    data: state.challenge
  };
};
const mapDispatchToProps = dispatch => {
  return {
    challengeActions: bindActionCreators(challengeActions, dispatch),
    adminPageActions: bindActionCreators(adminPageActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeCRUD);
