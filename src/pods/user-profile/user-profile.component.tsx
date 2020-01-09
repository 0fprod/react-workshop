import * as React from "react";
import { UserCardComponent } from "./components";

interface Props {
    organizationName: string;

    children: React.ReactNode
}

export const UserProfileComponent: React.FunctionComponent = (props: Props) => {

    return (
        <>
            <UserCardComponent></UserCardComponent>
        </>);
};
