import * as React from "react";
import { UserProfileComponent } from "./user-profile.component";
import { createDefaultUserProfileVm } from "./user-profile.vm";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { userProfileAPI } from "./user-profile.api";
import { SwitchRoutes } from "../../core";

interface Props extends RouteComponentProps { }

const UserProfileContainerInner = (props: Props) => {

    const userId = props.match.params['id'];
    const [user, setUser] = React.useState(createDefaultUserProfileVm());

    const navigateToOrganization = () => {
        props.history.push(SwitchRoutes.root);
    }

    const loadUser = (userId: number) => {
        userProfileAPI.fetchData(userId).then((res) => setUser(res));
    }

    React.useEffect(() => {
        loadUser(userId);
    }, [])

    return <UserProfileComponent user={user} navigateTo={navigateToOrganization} />;
};

export const UserProfileContainer = withRouter(UserProfileContainerInner);