import * as React from "react";
import { MemberVm } from "./member.vm";
import { SearchInput, MembersTableComponent } from "./components";

interface Props {
  organizationName: string;
  members: MemberVm[]
  children: React.ReactNode
}

export const OrganizationComponent: React.FunctionComponent = (props: Props) => {
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
      <MembersTableComponent membersCollection={members} organizationName={organization} />
    </>);
};
