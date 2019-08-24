import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as adminPageActions from "../../actions/adminPage";
import AdminPage from "../../components/AdminPage";

const mapStateToProps = state => {
  return { open: state.adminPage.open };
};
const mapDispatchToProps = dispatch => {
  return {
    adminPageActions: bindActionCreators(adminPageActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
