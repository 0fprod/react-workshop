import * as React from "react";
import { OrganizationComponent } from "./organization.component";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LinkedRoutes } from "../../core";
import { memberAPI } from "./member.api";
import { SessionContext } from "../../core/session-context";

interface Props extends RouteComponentProps {
}

const OrganizationContainerInner = (props: Props) => {

    const {
        organization,
        setOrganization,
        membersCollection,
        setMembersCollection
    } = React.useContext(SessionContext);

    const onClickUserProfile = (userId: number) => {
        props.history.push(LinkedRoutes.userProfile(userId));
    }

    const loadMembers = (organization: string) => {
        memberAPI.fetchData(organization).then(members => setMembersCollection(members));
    };

    React.useEffect(() => {
        if (!membersCollection.length) {
            loadMembers(organization);
        }
    }, []);


    return (<OrganizationComponent
        onClickUserProfile={onClickUserProfile}
        organization={organization}
        setOrganization={setOrganization}
        members={membersCollection}
        loadMembers={loadMembers}
    />);
};

export const OrganizationContainer = withRouter(OrganizationContainerInner);
