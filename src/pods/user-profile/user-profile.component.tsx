
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { UserProfileVm } from './user-profile.vm';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

interface Props {
  userId: string;
  initialUser: UserProfileVm;
}

export const UserProfileComponent: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);
  const { userId, initialUser } = props;

  return (
    <Card>
      <CardHeader title="User Profile" />
      <CardContent>
        Some content
      </CardContent>
    </Card>
  );
};