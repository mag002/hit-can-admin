import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
const StyledPageTitle = styled.div`
  text-align: center;
  padding: 15px;
  hr {
    margin: 15px 0px;
  }
`;
export default function PageTitle(props) {
  return (
    <StyledPageTitle>
      <Typography variant="h3">{props.title}</Typography>
      <hr></hr>
    </StyledPageTitle>
  );
}
