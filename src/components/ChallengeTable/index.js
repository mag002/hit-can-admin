import React from "react";
class ChallengeTable extends React.Component {
  componentDidMount() {
    this.props.challengeActions.fetchChallengeListRequest();
  }
  render() {
    return <div>Challenge</div>;
  }
}

export default ChallengeTable;
