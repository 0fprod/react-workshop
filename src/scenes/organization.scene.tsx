import * as React from "react";
import { CenteredLayout } from "../layout";
import { OrganizationContainer } from "../pods/organization";

export const OrganizationScene: React.FunctionComponent = () => {
  
  return(
    <CenteredLayout>
      <OrganizationContainer></OrganizationContainer>
    </CenteredLayout>
  )
};
