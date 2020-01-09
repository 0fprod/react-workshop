import * as React from "react";
import { OrganizationComponent } from "./organization.component";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LinkedRoutes } from "../../core";

interface Props extends RouteComponentProps { }

const OrganizationContainerInner = (props: Props) => {

    const userProfile = (userId: number) => {
        props.history.push(LinkedRoutes.userProfile(userId));
    }

    return (<OrganizationComponent userProfile={userProfile} organizationName="" members={[]}></OrganizationComponent>);
};

export const OrganizationContainer = withRouter(OrganizationContainerInner);
