import React from "react";
import styled from "styled-components";
import { ChallengeForm } from "..";

const StyledSidebar = styled.aside`
  width: 80vw;
  background: white;
  height: 100%;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <ChallengeForm></ChallengeForm>
    </StyledSidebar>
  );
}
