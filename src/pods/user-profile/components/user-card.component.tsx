import * as React from "react";
import { Card, CardContent, Button, CardActions, Avatar, CardHeader, makeStyles, TextField } from "@material-ui/core";
import { UserProfileVm } from "../user-profile.vm";
import { MockedUser } from "../mockedUserProfile";
import styled from "styled-components";


interface Props {
    user: UserProfileVm,
    navigateTo: () => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

const CardContentStyles = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    * {
        margin: 5%;
    }
`;

export const UserCardComponent = (props: Props) => {
    const classes = useStyles({});

    const { navigateTo } = props;
    const user = MockedUser;
    
    const keysOf: string[] = Object.keys(user);

    const capitalize = (word: string) => {
        let wordLowercase = word.toLocaleLowerCase();
        let wordUppercase = word.toLocaleUpperCase();
        
        return wordUppercase[0] + wordLowercase.substr(1, word.length);
    }

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    title={user.login}
                    avatar={<Avatar src={user.avatar_url} className={classes.avatar}></Avatar>}
                    subheader={user.bio}
                />
                <CardContent>
                    <CardContentStyles>                        
                        {keysOf.map((key,index) =>
                            <TextField key={index} disabled label={capitalize(key)} defaultValue={user[key]} />
                        )}
                    </CardContentStyles>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={e => navigateTo()}>Back</Button>
                </CardActions>
            </Card>
        </>);
};
