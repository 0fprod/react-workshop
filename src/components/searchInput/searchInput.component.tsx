import React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';

interface Props {
    organization: string;
    members: MemberEntity[];
    onOrganizationChange: (organization: string) => void;
    onMemberChange: (members: MemberEntity[]) => void;
}

const Section = styled.section`
    display:flex;
    justify-content: start;
    align-items: center;
    * {
        margin: 2%;
    }
`;

export const SearchInput = (props: Props) => {

    const loadMembers = (organization: string) => {
        memberAPI.getAllMembers(organization).then(members => props.onMemberChange(members));
    };

    React.useEffect(() => {
        loadMembers(props.organization);
    }, [])

    return (
        <Section>
            <InputLabel>Organization Name: </InputLabel>
            <Input type='text' onChange={e => props.onOrganizationChange(e.target.value)} />
            <Button variant="contained"
                color="primary"
                onClick={e => { loadMembers(props.organization) }}> Search!</Button>
        </Section>
    )
}