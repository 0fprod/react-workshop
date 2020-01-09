import React from "react";
import styled from "styled-components";

const FullSizedDiv = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const CenteredLayout: React.FunctionComponent = props => (
  <FullSizedDiv>
    {props.children}
  </FullSizedDiv>
);