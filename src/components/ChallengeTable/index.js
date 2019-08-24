import React from "react";
class ChallengeTable extends React.Component {
  componentDidMount() {
    this.props.challengeActions.fetchChallengeListRequest();
  }
  render() {
    return <div>Challenge</div>;
  }
}
/* FETCH API EXAMPLE MDFK
 */
export default ChallengeTable;
