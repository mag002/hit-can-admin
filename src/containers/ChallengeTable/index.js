import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as challengeActions from "./../../actions/challenge";
import ChallengeTable from "../../components/ChallengeTable";

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    challengeActions: bindActionCreators(challengeActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeTable);
