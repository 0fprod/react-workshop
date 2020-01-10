import * as React from "react";
import { MemberVm } from "./member.vm";
import { SearchInput, MembersTableComponent } from "./components";

interface Props {
  onClickUserProfile: (userId: number) => void;
  organization: string;
  setOrganization: (name: string) => void;
  members: MemberVm[]
  loadMembers: (organizationName: string) => void;
}

export const OrganizationComponent = (props: Props) => {
  
  return (
    <>
      <SearchInput
        organization={props.organization}
        setOrganization={props.setOrganization}
        loadMembers={props.loadMembers}
      />
      <MembersTableComponent
        members={props.members}
        organization={props.organization}
        onClickUserProfile={props.onClickUserProfile}
      />
    </>);
};
