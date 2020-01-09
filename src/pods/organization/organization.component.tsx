import * as React from "react";
import { MemberVm } from "./member.vm";
import { SearchInput, MembersTableComponent } from "./components";

interface Props {
  userProfile: (userId: number) => void;
  organizationName: string;
  members: MemberVm[]

}

export const OrganizationComponent = (props: Props) => {

  const [organization, setOrganization] = React.useState("lemoncode");
  const [members, setMembers] = React.useState<MemberVm[]>([]);

  React.useEffect(() => { }, [members]);

  return (
    <>
      <SearchInput
        organization={organization}
        onOrganizationChange={setOrganization}
        onMemberChange={setMembers}
        members={members}
      />
      <MembersTableComponent
        membersCollection={members}
        organizationName={organization}
        userProfile={props.userProfile}
      />
    </>);
};
