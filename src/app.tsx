import * as React from "react";
import { MembersTableComponent, SearchInput } from "./components";
import { MemberEntity } from "./model/member";
import { Card, CardContent } from "@material-ui/core";

interface Props {
  organizationName: string;
  members: MemberEntity[]
  children: React.ReactNode
}

export const App: React.FunctionComponent = (props: Props) => {
  const [organization, setOrganization] = React.useState("lemoncode");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => { }, [members]);

  return (
    <>
      <Card>
        <CardContent>
          <SearchInput
            organization={organization}
            onOrganizationChange={setOrganization}
            onMemberChange={setMembers}
            members={members}
          />
        </CardContent>
      </Card>
      <MembersTableComponent membersCollection={members} />
    </>);
};
