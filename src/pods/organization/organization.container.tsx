import * as React from "react";
import { OrganizationComponent } from "./organization.component";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LinkedRoutes } from "../../core";
import { MemberVm } from "./member.vm";
import { memberAPI } from "./member.api";

interface Props extends RouteComponentProps {
}


const OrganizationContainerInner = (props: Props) => {
    const [organization, setOrganization] = React.useState("lemoncode");
    const [members, setMembers] = React.useState<MemberVm[]>([]);

    const onClickUserProfile = (userId: number) => {
        props.history.push(LinkedRoutes.userProfile(userId));
    }

    const loadMembers = (organization: string) => {
        memberAPI.fetchData(organization).then(members => setMembers(members));
    };

    React.useEffect(() => {
        loadMembers(organization);
    },[]);    


    return (<OrganizationComponent
        onClickUserProfile={onClickUserProfile}
        organization={organization}
        setOrganization={setOrganization}
        members={members}
        loadMembers={loadMembers}
    />);
};

export const OrganizationContainer = withRouter(OrganizationContainerInner);
