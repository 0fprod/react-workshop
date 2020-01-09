import * as React from "react";
import { UserProfileComponent } from "./user-profile.component";

interface Props {
    organizationName: string;
    children: React.ReactNode
}

export const UserProfileContainer: React.FunctionComponent = (props: Props) => {

    return <UserProfileComponent></UserProfileComponent>;
};
