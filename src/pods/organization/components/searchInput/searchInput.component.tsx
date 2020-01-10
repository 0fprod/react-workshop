import React from 'react';
import { MemberVm } from '../../member.vm';
import { memberAPI } from '../../member.api';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';
import { CardHeader, CardContent, CardActions } from '@material-ui/core';

interface Props {
    organization: string;
    setOrganization: (name: string) => void;
    loadMembers: (organizationName: string) => void;
}

const Section = styled.section`
    width: 100%;
    margin: 2%;
`;

export const SearchInput = (props: Props) => {
    const [input, setInput] = React.useState("");

    return (
        <Section>
            <Card>
                <CardHeader title='Search an organization in github!'>
                </CardHeader>
                <CardContent>
                    <InputLabel>Organization name:</InputLabel>
                    <Input type='text' onChange={e => setInput(e.target.value) } />
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                        color="primary"
                        onClick={e => { 
                            props.setOrganization(input);
                            props.loadMembers(props.organization);
                        }}> Search!</Button>
                </CardActions>
            </Card>
            
        </Section>
    )
}