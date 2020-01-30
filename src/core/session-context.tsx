import React from 'react';
import { MemberVm } from '../pods/organization/member.vm';

interface Context {
    membersCollection: MemberVm[];
    organization: string;
    setOrganization: (name: string) => void;
    setMembersCollection: (members: MemberVm[]) => void;
}

export const SessionContext = React.createContext<Context>({
    membersCollection: [],
    organization: 'lemoncode',
    setMembersCollection: (members: MemberVm[]) => { },
    setOrganization: (name: string) => { },
});

export const SessionProvider: React.FunctionComponent = props => {
    const [collection, setCollection] = React.useState<MemberVm[]>([]);
    const [organization, setOrganization] = React.useState<string>('lemoncode');

    return (
        <SessionContext.Provider value={{
            membersCollection: collection, setMembersCollection: setCollection,
            organization: organization, setOrganization: setOrganization
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}